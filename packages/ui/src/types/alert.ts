import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

export const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        destructive: 'bg-red-50 text-red-800 border-red-300',
        success: 'bg-green-50 text-green-800 border-green-300',
        warning: 'bg-yellow-50 text-yellow-800 border-yellow-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type AlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;
export type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
