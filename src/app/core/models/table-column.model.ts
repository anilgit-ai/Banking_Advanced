export interface TableColumn<T> {
  readonly key: keyof T;

  readonly header: string;

  readonly sortable?: boolean;
}
