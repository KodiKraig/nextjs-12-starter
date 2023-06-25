import cn from 'clsx';
import s from './Input.module.css';
import React, { InputHTMLAttributes } from 'react';
import { Text } from '@components/ui';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
}

const Input: React.FC<InputProps> = (props) => {
  const { className, children, title, onChange, ...rest } = props;

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <div className="flex flex-col">
      {title ? <Text variant="body">{title}</Text> : null}
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </div>
  );
};

export default Input;
