import { makeAutoObservable, runInAction } from 'mobx';
import type { Post, User } from '../services/types';
import { apiClient } from '../services/ApiClientServer';

export class PostsUsersStore {
  private _currentPostPage: number = 1;
  private _currentUserPage: number = 1;
  posts: Post[] = [];
  users: User[] = [];
  isLoading = false;
  errorPosts: string | null = null;
  errorUsers: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get currentPostPage() {
    return this._currentPostPage;
  }

  get currentUserPage() {
    return this._currentUserPage;
  }

  setPostPage(page: number) {
    this._currentPostPage = Math.max(1, page);
  }

  setUserPage(page: number) {
    this._currentUserPage = Math.max(1, page);
  }

  getPaginatedPosts(itemsPerPage: number) {
    const start = (this._currentPostPage - 1) * itemsPerPage;
    return this.posts.slice(start, start + itemsPerPage);
  }

  getPaginatedUsers(itemsPerPage: number) {
    const start = (this._currentUserPage - 1) * itemsPerPage;
    return this.users.slice(start, start + itemsPerPage);
  }

  // fetchCombinedData = async () => {
  //   this.isLoading = true;
  //   this.errorPosts = null;
  //   this.errorUsers = null;
  //   try {
  //     const [postsResult, usersResult] = await Promise.allSettled([
  //     apiClient.getPosts(),
  //     apiClient.getUsers()
  //     ]);
  //     runInAction(() => {
  //       if (postsResult.status === 'fulfilled') {
  //         this.posts = postsResult.value;
  //       } else {
  //         this.errorPosts =
  //           postsResult.reason instanceof Error
  //             ? postsResult.reason.message
  //             : 'Failed to fetch posts';
  //         this.posts = [];
  //       }
  //       if (usersResult.status === 'fulfilled') {
  //         this.users = usersResult.value;
  //       } else {
  //         this.errorUsers =
  //           usersResult.reason instanceof Error
  //             ? usersResult.reason.message
  //             : 'Failed to fetch users';
  //         this.users = [];
  //       }
  //       this.isLoading = false;
  //     });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.errorPosts = 'Unexpected post error';
  //       this.errorUsers = 'Unexpected user error';
  //       this.isLoading = false;
  //     });
  //   }
  // };

  fetchPostsData = async () => {
  this.isLoading = true; 
  this.errorPosts = null;
  try {
    const postsResult = await apiClient.getPosts();
    runInAction(() => {
      this.posts = postsResult;
      this.isLoading = false; 
    });
  } catch (error) {
    runInAction(() => {
      this.errorPosts =
        error instanceof Error ? error.message : 'Failed to fetch posts';
      this.posts = [];
      this.isLoading = false; 
    });
  }
};

fetchUsersData = async () => {
  this.isLoading = true; 
  this.errorUsers = null;
  try {
    const usersResult = await apiClient.getUsers();
    runInAction(() => {
      this.users = usersResult;
      this.isLoading = false; 
    });
  } catch (error) {
    runInAction(() => {
      this.errorUsers =
        error instanceof Error ? error.message : 'Failed to fetch users';
      this.users = [];
      this.isLoading = false;
    });
  }
};

  get hasData() {
    return this.posts.length > 0 || this.users.length > 0;
  }
}