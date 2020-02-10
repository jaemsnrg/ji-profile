import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './logo.style';

const Logo = ({ invert }) => {
    return (
    <Wrapper>
       <Text invert={invert} >JID</Text>
    </Wrapper>)
}

export default Logo;