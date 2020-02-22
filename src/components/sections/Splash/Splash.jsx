import React from 'react';
import { Wrapper, LargeLayout, TitleWrapper, InfoBoxWrapper, TextBlockWrapper, MobileHandWrapper } from './splash.style';

import { HandAnimation } from '@molecules';
import { Title, InfoBox, TextBlock } from '@atoms';


const Splash = () => {
    return ( 
        <Wrapper>
            <LargeLayout>
                <div>
                <TitleWrapper>
                    <Title 
                        title={'JI Digital'}
                        subtitle={`Joanna Iwanska`}
                    />
                </TitleWrapper>
                <InfoBoxWrapper>
                    <InfoBox
                        infoTitle={'Profession'}
                        infoDetail={'Tech Lead'}
                    />
                    <InfoBox
                        infoTitle={'Location'}
                        infoDetail={'London, Uk'}
                    />
                    <InfoBox
                        infoTitle={'Experience'}
                        infoDetail={'8+ Years'}
                    />
                </InfoBoxWrapper>

                {/* displays hand image in this position at mobile */}
                <MobileHandWrapper>
                    <HandAnimation />
                </MobileHandWrapper>

                <TextBlockWrapper>
                    <TextBlock text={'<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>'} />
                </TextBlockWrapper>
                </div>
                <div>
                    {/* <HandAnimation /> */}
                </div>
            </LargeLayout>
            
        </Wrapper>
        );
}

export default Splash;