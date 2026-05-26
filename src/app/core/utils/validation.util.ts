/*
|--------------------------------------------------------------------------
| Validation Utility Functions
|--------------------------------------------------------------------------
*/

export class ValidationUtil {
  /*
  |--------------------------------------------------------------------------
  | Email Validator
  |--------------------------------------------------------------------------
  */

  public static isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  }
}
