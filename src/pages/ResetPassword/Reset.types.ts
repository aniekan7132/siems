import type { ChangeEvent } from "react";

export interface FormInputComponentProps {
  errors: { resetCode?: string; newPassword?: string; confirmPassword: string };
  values: { resetCode: string; newPassword: string; confirmPassword: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface FormInputComponentProps {
  values: {
    resetCode: string;
    newPassword: string;
    confirmPassword: string;
  };
  errors: {
    resetCode?: string;
    newPassword?: string;
    confirmPassword: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
