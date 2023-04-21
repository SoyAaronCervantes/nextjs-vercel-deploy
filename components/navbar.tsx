import React, {FC} from 'react';
import {ActiveLink} from "@/components/active-link";

export const Navbar: FC = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    },
  ];

  return (
    <nav className="[ flex gap-4 ]">
      { menuItems.map(
        ({ text,href  }) => (
          <ActiveLink key={href} text={text} href={href} />
        )
      )}
    </nav>
  );
};

export default Navbar;
