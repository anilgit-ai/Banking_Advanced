import {
  Injectable,
} from '@angular/core';

import {
  ToastrService,
} from 'ngx-toastr';
import { APP_CONSTANTS, TOAST_SEVERITY } from '../../core/constants/app.constants';

;

/*
|--------------------------------------------------------------------------
| Enterprise Toast Service
|--------------------------------------------------------------------------
| Centralized reusable notification handling.
|--------------------------------------------------------------------------
*/

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(
    private readonly toastrService:
      ToastrService,
  ) {}

  /*
  |--------------------------------------------------------------------------
  | Success Toast
  |--------------------------------------------------------------------------
  */

  public showSuccess(
    message: string =
      APP_CONSTANTS.TOAST_MESSAGES
        .SUCCESS_CREATE,
  ): void {

    this.toastrService.success(
      message,
      TOAST_SEVERITY.SUCCESS,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Error Toast
  |--------------------------------------------------------------------------
  */

  public showError(
    message: string =
      APP_CONSTANTS.TOAST_MESSAGES
        .ERROR_LOAD,
  ): void {

    this.toastrService.error(
      message,
      TOAST_SEVERITY.ERROR,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Info Toast
  |--------------------------------------------------------------------------
  */

  public showInfo(
    message: string,
  ): void {

    this.toastrService.info(
      message,
      TOAST_SEVERITY.INFO,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | Warning Toast
  |--------------------------------------------------------------------------
  */

  public showWarning(
    message: string,
  ): void {

    this.toastrService.warning(
      message,
      TOAST_SEVERITY.WARN,
    );
  }
}