import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from './lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        blue: 'bg-blue-600 text-white shadow-xs hover:bg-blue-700',
        green: 'bg-green-600 text-white shadow-xs hover:bg-green-700',
        red: 'bg-red-600 text-white shadow-xs hover:bg-red-700',
        yellow: 'bg-yellow-400 text-yellow-900 shadow-xs hover:bg-yellow-500',
        purple: 'bg-purple-600 text-white shadow-xs hover:bg-purple-700',
        orange: 'bg-orange-500 text-white shadow-xs hover:bg-orange-600',
        pink: 'bg-pink-500 text-white shadow-xs hover:bg-pink-600',
        'outline-blue':
          'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50',
        'outline-green':
          'border border-green-600 text-green-600 bg-transparent hover:bg-green-50',
        'outline-red':
          'border border-red-600 text-red-600 bg-transparent hover:bg-red-50',
        'outline-purple':
          'border border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-6',
        icon: 'size-9',
      },
      text: {
        sm: 'text-sm',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  text,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, text, className }))}
      {...props}
    />
  );
}

export { buttonVariants };
export type { ButtonProps };
