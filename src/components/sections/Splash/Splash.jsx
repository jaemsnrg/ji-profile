import React from "react";
import {
  Wrapper,
  LargeLayout,
  TitleWrapper,
  InfoBoxWrapper,
  TextBlockWrapper,
  MobileHandWrapper
} from "./splash.style";

import { HandAnimation } from "@molecules";
import { Title, InfoBox, TextBlock } from "@atoms";
import { Info, Github, LinkedIn } from "@icons";

const Splash = () => {
  return (
    <Wrapper>
      <LargeLayout>
        <div id="left-section">
          <TitleWrapper>
            <Title title={"JI Digital"} subtitle={`Joanna Iwanska`} />
          </TitleWrapper>
          <InfoBoxWrapper>
            <InfoBox infoTitle={"Profession"} infoDetail={"Tech Lead"} />
            <InfoBox infoTitle={"Location"} infoDetail={"London, Uk"} />
            <InfoBox infoTitle={"Experience"} infoDetail={"8+ Years"} />
          </InfoBoxWrapper>

          {/* displays hand image in this position at mobile */}
          <MobileHandWrapper>
            <HandAnimation />
          </MobileHandWrapper>

          <TextBlockWrapper>
            <TextBlock
              text={
                "<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/><br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>"
              }
            />
          </TextBlockWrapper>
          <div id="link-icons">
            <Info size={30} />
            <Github size={30} />
            <LinkedIn size={30} />
          </div>
        </div>
        <div id="right-section">
          <HandAnimation />
        </div>
      </LargeLayout>
    </Wrapper>
  );
};

export default Splash;
