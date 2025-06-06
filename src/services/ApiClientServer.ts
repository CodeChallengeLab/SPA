import axios from 'axios';
import { type Album, type Post, type User } from './types';
import type { ApiClient } from './ApiClient';

class ApiClientServer implements ApiClient {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  
  async getAlbums(): Promise<Album[]> {
    const response = await axios.get<Album[]>(`${this.baseURL}/albums`);
    return response.data;
  }
  
  async getPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${this.baseURL}/posts`);
    return response.data;
  }
  
  async getUsers(): Promise<User[]> {
    const response = await axios.get<User[]>(`${this.baseURL}/users`);
    return response.data;
  }
}

export const apiClient = new ApiClientServer();