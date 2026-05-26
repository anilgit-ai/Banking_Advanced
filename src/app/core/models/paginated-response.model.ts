export interface PaginatedResponse<T> {
  readonly items: readonly T[];

  readonly totalItems: number;

  readonly currentPage: number;

  readonly pageSize: number;
}
