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
};

const Nav = ({ showNav }: NavProps) => {
  if (showNav) {
    return (
      <NavGroup>
        <Link href="/blog/index" as="/blog">
          <a>Journal</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </NavGroup>
    );
  } else return null
};

export default Nav;