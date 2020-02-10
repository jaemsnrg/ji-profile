import React from 'react';
import { Moon } from '@icons';
import { TitleText, FeatureBall } from '@atoms';
import { Wrapper, TitleBox, Grid } from './clients.style';

const About = () => {
    return ( 
        <Wrapper>
            <TitleBox>
                <TitleText>Clients</TitleText>
            </TitleBox>
                <Grid>
                    <FeatureBall>Wunderman Thompson</FeatureBall>
                    <FeatureBall>Heineken</FeatureBall>
                    <FeatureBall>Envoy Digital</FeatureBall>
                    <FeatureBall>Neoworks</FeatureBall>
                    <FeatureBall>Accenture</FeatureBall>
                    <FeatureBall>e2y</FeatureBall>
                </Grid>
        </Wrapper>
        );
}

export default About;