export interface TableAction<T> {
  readonly label: string;

  readonly icon: string;

  readonly action: (row: T) => void;
}
