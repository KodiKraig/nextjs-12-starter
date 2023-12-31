import cn from 'clsx';
import React, { FC } from 'react';

interface ContainerProps {
  className?: string;
  children?: any;
  el?: HTMLElement;
  clean?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  clean = false // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    'mx-auto max-w-7xl w-full min-h-screen': !clean
  });

  let Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
