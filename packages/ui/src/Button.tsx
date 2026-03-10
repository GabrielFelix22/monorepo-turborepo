import { Slot } from '@radix-ui/react-slot';
import { cn } from './lib/utils';
import { type ButtonProps, buttonVariants } from './types/button';

export { buttonVariants };
export type { ButtonProps };

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
