import { makeAutoObservable, runInAction } from 'mobx';
import type { Post, User } from '../services/types';
import { apiClient } from '../services/ApiClientServer';

export class PostsUsersStore {
  posts: Post[] = [];
  users: User[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCombinedData = async () => {
    this.isLoading = true;
    this.error = null;    
    try {      
      const [posts, users] = await Promise.all([
        apiClient.getPosts(),
        apiClient.getUsers()
      ]);
      
      runInAction(() => {
        this.posts = posts;
        this.users = users;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Failed to fetch data';
        this.isLoading = false;
      });
    }
  };

  get hasData() {
    return this.posts.length > 0 || this.users.length > 0;
  }
}