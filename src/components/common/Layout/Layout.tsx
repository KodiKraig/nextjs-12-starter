import { FC } from 'react';
import s from './Layout.module.css';
import cn from 'clsx';
import { Navbar, Footer } from '@components/common';
import { useRouter } from 'next/router';

const Layout: FC<{
  children: any;
}> = ({ children }) => {
  const { pathname } = useRouter();

  let navBarLinks = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/portfolio',
      label: 'Portfolio'
    },
    // {
    //   href: '/about',
    //   label: 'About'
    // },
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
