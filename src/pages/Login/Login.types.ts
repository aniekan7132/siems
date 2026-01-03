import type { ChangeEvent } from "react";

export interface FormInputComponentProps {
  errors: { email?: string; password?: string };
  values: { email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface FormInputComponentProps {
  values: {
    email: string;
    password: string;
  };
  errors: {
    email?: string;
    password?: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
