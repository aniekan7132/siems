// Toast utility functions
import { toaster } from "@/components/ui/toaster";

export const success = (title: string, description: string = "", action?: { label: string; onClick: () => void }) => {
  toaster.success({
    title,
    description,
    action,
  });
};

export const failure = (title: string, description: string = "", action?: { label: string; onClick: () => void }) => {
  toaster.error({
    title,
    description,
    action,
  });
};
