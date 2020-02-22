import React from 'react';
import { Wrapper } from './handAnimation.style';
import { Hand } from '@icons';
import { BallGroupAnimation } from '@atoms';

const HandAnimation = () => {
    return (
    <Wrapper>
        <Hand />
        <BallGroupAnimation />
    </Wrapper>)
}

export default HandAnimation;