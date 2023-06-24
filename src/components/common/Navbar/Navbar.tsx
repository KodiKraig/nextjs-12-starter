import { FC } from 'react';
import Link from 'next/link';
import { Logo } from '@components/ui';
import { Container } from '@components/common';
import s from './Navbar.module.css';
import { useRouter } from 'next/router';

interface Link {
  href: string;
  label: string;
}

interface NavbarProps {
  links?: Link[];
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  const { pathname } = useRouter();

  return (
    <div className={s.root}>
      <Container clean className={s.navContainer}>
        <div className={s.nav}>
          <div className={s.logoLink}>
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <div className="relative w-16 h-16">
                  <Logo />
                </div>
              </a>
            </Link>

            <nav className={s.navMenu}>
              {links?.map((l) => (
                <Link href={l.href} key={l.href}>
                  <a className={pathname === l.href ? s.selectedLink : s.link}>
                    {l.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>

      <div className="px-2">
        <div className="p-0.5 bg-secondary rounded-lg" />
      </div>
    </div>
  );
};

export default Navbar;
