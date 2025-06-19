import { makeAutoObservable, runInAction } from 'mobx';
import type { User } from '../services/types';
import { apiClient } from '../services/ApiClientServer';

export class UsersStore {
  private _currentUserPage: number = 1;
  users: User[] = [];
  isLoadingUsers = false;
  errorUsers: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get currentUserPage() {
    return this._currentUserPage;
  }

  setUserPage(page: number) {
    this._currentUserPage = Math.max(1, page);
  }

  getPaginatedUsers(itemsPerPage: number) {
    const start = (this._currentUserPage - 1) * itemsPerPage;
    return this.users.slice(start, start + itemsPerPage);
  }

  fetchUsersData = async () => {
    this.isLoadingUsers = true;
    this.errorUsers = null;
    try {
      const usersResult = await apiClient.getUsers();
      runInAction(() => {
        this.users = usersResult;
        this.isLoadingUsers = false;
      });
    } catch (error) {
      runInAction(() => {
        this.errorUsers =
          error instanceof Error ? error.message : 'Failed to fetch users';
        this.users = [];
        this.isLoadingUsers = false;
      });
    }
  };

  get hasUsersData() {
    return this.users.length > 0;
  }
}