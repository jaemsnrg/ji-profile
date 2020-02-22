import React from 'react';
import { Wrapper, WrapItemOne, WrapItemTwo, WrapItemThree, WrapItemFour, WrapItemFive, WrapItemSix, WrapItemSeven, WrapItemEight } from './handAnimation.style';
import { Hand } from '@icons';
import { BallGroupAnimation, BallAnimation } from '@atoms';

const HandAnimation = () => {
    return (
    <Wrapper>
        <Hand />
        <WrapItemOne>
            <BallGroupAnimation width={'30px'} numOfItems={12} />
        </WrapItemOne>
        <WrapItemTwo>
            <BallGroupAnimation width={'20px'} numOfItems={6} />
        </WrapItemTwo>
        <WrapItemThree>
            <BallGroupAnimation width={'20px'} numOfItems={4} />
        </WrapItemThree>
        <WrapItemFour>
            <BallGroupAnimation width={'10px'} numOfItems={3} />
        </WrapItemFour>
        <WrapItemFive>
            <BallGroupAnimation width={'10px'} numOfItems={2} />
        </WrapItemFive>
        <WrapItemSix>
            <BallAnimation width={'50px'} />
        </WrapItemSix>
        <WrapItemSeven>
            <BallAnimation width={'50px'} />
        </WrapItemSeven>
        <WrapItemEight>
            <BallAnimation width={'30px'} />
        </WrapItemEight>
    </Wrapper>)
}

export default HandAnimation;