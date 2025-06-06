import { type Album, type Post, type User } from './types';

export interface ApiClient {
  getAlbums(): Promise<Album[]>;
  getPosts(): Promise<Post[]>;
  getUsers(): Promise<User[]>;
}
