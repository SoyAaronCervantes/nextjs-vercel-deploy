import React, {FC} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

interface ActiveLinkProps{
  text: string;
  href: string;
}

export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link className={ asPath === href ? 'text-blue-500 underline underline-offset-8' : '' } href={href}>{text}</Link>
  );
};
