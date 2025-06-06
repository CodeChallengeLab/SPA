import { makeAutoObservable, runInAction } from "mobx";
import { apiClient } from "../services/ApiClientServer";
import type { Album } from "../services/types";

export class AlbumsStore {
  albums: Album[] = [];
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAlbums = async () => {
    this.isLoading = true;
    this.error = null;
    
    try {
      const albums = await apiClient.getAlbums();
      runInAction(() => {
        this.albums = albums;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Failed to fetch albums';
        this.isLoading = false;
      });
    }
  };
}