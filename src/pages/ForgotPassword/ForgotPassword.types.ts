export interface ForgotPasswordFormValues {
    email: string;
  }
  
  export interface ForgotPasswordResponse {
    message: string;
    success: boolean;
  }
  
  export interface ForgotPasswordError {
    message: string;
  }