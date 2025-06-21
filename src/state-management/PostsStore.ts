import { makeAutoObservable, runInAction } from 'mobx';
import type { Post } from '../services/types';
import { apiClient } from '../services/ApiClientServer';

export class PostsStore {
  private _currentPostPage: number = 1;  
  posts: Post[] = [];
  isLoadingPosts = false;
  errorPosts: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get currentPostPage() {
    return this._currentPostPage;
  }

  setPostPage(page: number) {
    this._currentPostPage = Math.max(1, page);
  }

  getPaginatedPosts(itemsPerPage: number) {
    const start = (this._currentPostPage - 1) * itemsPerPage;
    return this.posts.slice(start, start + itemsPerPage);
  }
  
  fetchPostsData = async () => {
    this.isLoadingPosts = true;
    this.errorPosts = null;
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const postsResult = await apiClient.getPosts();
      runInAction(() => {
        this.posts = postsResult;
        this.isLoadingPosts = false;
      });
    } catch (error) {
      runInAction(() => {
        this.errorPosts =
          error instanceof Error ? 'Failed to fetch posts' : 'Unknown posts error';
        this.posts = [];
        this.isLoadingPosts = false;
      });
    }
  };
}