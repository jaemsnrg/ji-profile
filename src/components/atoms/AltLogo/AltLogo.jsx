import React from 'react';
import {Logo} from '@atoms';
import { Wrapper, Text } from './altLogo.style';

const AltLogo = () => {
    return (
    <Wrapper>
        <div>
            <Logo invert={true} />
        </div>
    </Wrapper>
    )
}

export default AltLogo;