import { CounterStore } from './CounterStore';
import { AlbumsStore } from './AlbumStore';
import { PostsStore } from './PostsStore';
import { UsersStore } from './UsersStore';

export class RootStore {
  counterStore: CounterStore;
  albumsStore: AlbumsStore;  
  postsStore: PostsStore;
  usersStore: UsersStore;  
  
  constructor() {
    this.counterStore = new CounterStore();
    this.albumsStore = new AlbumsStore();
    this.postsStore = new PostsStore();
    this.usersStore = new UsersStore();    
  }
}

export const rootStore = new RootStore();