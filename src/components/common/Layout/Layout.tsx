import { FC } from 'react';
import s from './Layout.module.css';
import cn from 'clsx';
import { Navbar, Footer } from '@components/common';

const Layout: FC<{
  children: any;
}> = ({ children }) => {
  let navBarLinks = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/portfolio',
      label: 'Portfolio'
    },
    {
      href: '/about',
      label: 'About'
    },
    {
      href: '/contact',
      label: 'Contact'
    }
  ];

  return (
    <div className={cn(s.root)}>
      <Navbar links={navBarLinks} />
      <main className="fit">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
