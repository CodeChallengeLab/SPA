import { CounterStore } from './CounterStore';
import { AlbumsStore } from './AlbumStore';
import { CombinedStore } from './CombinedStore';

export class RootStore {
  counterStore: CounterStore;
  albumsStore: AlbumsStore;
  combinedStore: CombinedStore;

  constructor() {
    this.counterStore = new CounterStore();
    this.albumsStore = new AlbumsStore();
    this.combinedStore = new CombinedStore();
  }
}

// Singleton pattern для глобального доступа
export const rootStore = new RootStore();