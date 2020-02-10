import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './titleText.style';

const TitleText = ({children}) => {
    return (
    <Wrapper>
        {children}
    </Wrapper>)
}

export default TitleText;