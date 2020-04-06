import React from "react";
import { Button } from 'antd'
import Link from "next/link"
import styled from 'styled-components'

const NavGroup = styled.nav`
  justify-content: right;

  a {
    color: white;
    margin-left: 20px;
  }
`

type NavProps = {
  showNav: boolean;
  navbar: any;
};

const Nav = ({ showNav, navbar }: NavProps) => {
  if (showNav) {
    return (
      <NavGroup>
        {navbar.map((link, i) =>
          <Link href={link.href} as={link.as} key={i}>
            <a>{link.name}</a>
          </Link>
        )}
      </NavGroup>
    );
  } else return null
};

export default Nav;