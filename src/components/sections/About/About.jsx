import React from 'react';
import { Moon } from '@icons';
import { TitleText, SubTitleText } from '@atoms';
import { Wrapper, TitleBox, TextBox } from './about.style';

const About = () => {
    return ( 
        <Wrapper>
            <TitleBox>
                <TitleText>Hi! I'm Joanna</TitleText>
            </TitleBox>
            <TextBox>
                <SubTitleText>I am a technical lead specialising in Hybris and enterprise Java applications</SubTitleText>
                <SubTitleText>With a background in computer science, and over 8 years industry experience; I have probably solved your problem before... many times</SubTitleText>
            </TextBox>
        </Wrapper>
        );
}

export default About;