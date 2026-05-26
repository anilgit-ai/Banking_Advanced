export interface ApiError {
  readonly statusCode: number;
  readonly message: string;
  readonly timestamp?: string;
}
