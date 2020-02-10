import React from 'react';
import { motion } from "framer-motion"
import { Moon } from '@icons';
import { TitleText, Ballie, AnimatedBall } from '@atoms';
import { Wrapper, TitleBox, MoonWrapper, BallWrapper } from './splash.style';

const Splash = () => {
    return ( 
        <Wrapper>
            <MoonWrapper>
                <Moon />
            </MoonWrapper>
            <TitleBox>
                <TitleText>Technical Solutions</TitleText>
            </TitleBox>
            <BallWrapper>
                <Ballie />
                <Ballie />
                <Ballie />
                <Ballie />
                <Ballie />
                <Ballie />
            </BallWrapper>
            {/* <AnimatedBall /> */}
        </Wrapper>
        );
}

export default Splash;