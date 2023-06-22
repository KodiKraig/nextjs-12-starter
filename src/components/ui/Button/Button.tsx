import { FC, ButtonHTMLAttributes } from 'react';
import s from './Button.module.css';
import cn from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?:
    | 'flat'
    | 'slim'
    | 'ghost'
    | 'naked'
    | 'transparent'
    | 'gradientFace'
    | 'gradientBordered';
  active?: boolean;
  type?: 'submit' | 'reset' | 'button';
  width?: string | number;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = 'slim',
    children,
    active,
    width,
    style = {},
    loading = false,
    disabled = false,
    ...rest
  } = props;

  const rootClassName = cn(
    s.root,
    {
      [s.ghost]: variant === 'ghost',
      [s.slim]: variant === 'slim',
      [s.naked]: variant === 'naked',
      [s.transparent]: variant === 'transparent',
      [s.gradientFace]: variant === 'gradientFace',
      [s.gradientBordered]: variant === 'gradientBordered',
      [s.loading]: loading,
      [s.disabled]: disabled
    },
    className
  );

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
