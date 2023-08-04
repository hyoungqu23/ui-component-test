import { forwardRef, type ComponentProps } from 'react';
import { cls } from '../../libs/utils';

export interface IButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'text';
  size: 'lg' | 'md' | 'sm' | 'xs';
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ variant = 'primary', size = 'lg', children, className, ...rest }, ref) => {
    const buttonVariant = {
      primary: 'text-white bg-indigo-500 disabled:bg-indigo-200',
      secondary:
        'text-indigo-500 bg-indigo-100 disabled:bg-gray-200 disabled:text-gray-400',
      tertiary: 'box-border border-[1px] border-indigo-500 text-indigo-500',
      text: 'text-indigo-500',
      lg: 'px-1 py-3 text-body2_b w-[343px] h-fit rounded-2xl',
      md: 'px-1 py-3 text-body2_b w-[312px] h-fit rounded-xl',
      sm: 'px-4 py-3 w-fit h-fit text-body3_b rounded-xl',
      xs: 'px-3 py-2 font-bold rounded-md text-caption1_m w-fit h-fit',
    };

    return (
      <button
        ref={ref}
        className={cls(
          'flex items-center justify-center gap-1 outline-none cursor-pointer disabled:cursor-not-allowed',
          buttonVariant[variant],
          buttonVariant[size],
          typeof className === 'string' ? className : '',
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
