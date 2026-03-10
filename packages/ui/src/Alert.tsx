import { cn } from './lib/utils';
import { alertVariants, type AlertProps, type AlertDescriptionProps } from './types/alert';

export { alertVariants };

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      role='alert'
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  );
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <p className={cn('text-sm leading-relaxed', className)} {...props} />
  );
}
