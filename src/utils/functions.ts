import { toaster } from "../components/ui/toaster";

export const success = (title: string, description: string = "") => {
  toaster.success({
    title,
    description,
  });
};

export const failure = (title: string, description: string = "") => {
  toaster.error({
    title,
    description,
  });
};

export const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};
