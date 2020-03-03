import React from "react";
import { Button } from 'antd'
import Link from "next/link"
import styled from 'styled-components'

const NavGroup = styled.nav`
  justify-content: right;
  
`

type NavProps = {
  showNav: boolean;
};

const Nav = ({ showNav }: NavProps) => {
  if (showNav) {
    return (
      <NavGroup>
        <Link href="/">
          <Button type="link">Journal</Button>
        </Link>
        <Link href="/" as="/blog">
          <Button type="link">Contact</Button>
        </Link>
      </NavGroup>
    );
  } else return null
};

export default Nav; 