import React from 'react';
import { Logo, MenuIcon } from '@atoms';
import { Wrapper, LogoBox, MenuIconBox } from './header.style';

const Header = () => {
    return (
    <Wrapper>
        <LogoBox>
            <Logo />
        </LogoBox>
        <MenuIconBox>
            <MenuIcon />
        </MenuIconBox>
    </Wrapper>)
}

export default Header;