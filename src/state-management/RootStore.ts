import { CounterStore } from './CounterStore';
import { AlbumsStore } from './AlbumStore';
import { PostsUsersStore } from './PostsUsersStore';
import { PaginationStore } from './PaginationStore';

export class RootStore {
  counterStore: CounterStore;
  albumsStore: AlbumsStore;
  postsUsersStore: PostsUsersStore;
  paginationStore: PaginationStore;

  constructor() {
    this.counterStore = new CounterStore();
    this.albumsStore = new AlbumsStore();
    this.postsUsersStore = new PostsUsersStore();
    this.paginationStore = new PaginationStore();
  }
}

export const rootStore = new RootStore();