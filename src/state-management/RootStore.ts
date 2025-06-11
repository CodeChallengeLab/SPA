import { CounterStore } from './CounterStore';
import { AlbumsStore } from './AlbumStore';
import { PostsUsersStore } from './PostsUsersStore';

export class RootStore {
  counterStore: CounterStore;
  albumsStore: AlbumsStore;
  postsUsersStore: PostsUsersStore;

  constructor() {
    this.counterStore = new CounterStore();
    this.albumsStore = new AlbumsStore();
    this.postsUsersStore = new PostsUsersStore();
  }
}

export const rootStore = new RootStore();