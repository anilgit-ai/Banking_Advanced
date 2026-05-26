export interface RequestState<T> {
  readonly loading: boolean;

  readonly data: T | null;

  readonly error: string | null;
}
