import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  public mapError(error: HttpErrorResponse): string {
    switch (error.status) {
      case 400:
        return 'Bad request';

      case 401:
        return 'Unauthorized access';

      case 403:
        return 'Access denied';

      case 404:
        return 'Resource not found';

      case 500:
        return 'Internal server error';

      default:
        return error.message || 'Unexpected error occurred';
    }
  }
}
