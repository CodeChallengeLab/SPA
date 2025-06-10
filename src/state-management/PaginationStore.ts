import { makeAutoObservable } from 'mobx';

export class PaginationStore {
  currentPage = 1;
  itemsPerPage = 10;

  constructor() {
    makeAutoObservable(this);
  }
  
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return this.startIndex + this.itemsPerPage;
  }

  getTotalPages(totalItems: number) {
    return Math.ceil(totalItems / this.itemsPerPage);
  }

  getPaginatedItems<T>(items: T[]): T[] {
    return items.slice(this.startIndex, this.endIndex);
  }

  getDisplayInfo(totalItems: number) {
    const actualEnd = Math.min(this.endIndex, totalItems);
    return {
      start: totalItems > 0 ? this.startIndex + 1 : 0,
      end: actualEnd,
      total: totalItems
    };
  }
  
  setPage(page: number) {
    this.currentPage = Math.max(1, page);
  }

  setItemsPerPage(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
  }

  nextPage(totalItems: number) {
    const totalPages = this.getTotalPages(totalItems);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  reset() {
    this.currentPage = 1;
  }

  hasNextPage(totalItems: number): boolean {
    return this.currentPage < this.getTotalPages(totalItems);
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }
}