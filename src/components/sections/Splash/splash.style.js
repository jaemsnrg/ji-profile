import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin: 20px;
  ${({ theme }) => theme.mq.atTablet`
        height: 100vh;
    `}}
`;

export const LargeLayout = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  & > #left-section {
    width: 100%;
    float: left;
    ${({ theme }) => theme.mq.atTablet`
        width: 50%;
        margin-right: 30px;
    `}}
  }

  & #link-icons {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 30px;
    & > div {
      margin-right: 15px;
    }
  }

  & #right-section {
    display: none;
    ${({ theme }) => theme.mq.atTablet`
        display: block;
        width: 50%;
    `}}
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 20px;
  ${({ theme }) => theme.mq.atTablet`
    margin-bottom: 60px;
    `}}
`;

export const InfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => theme.mq.atTablet`

    `}}
`;

export const TextBlockWrapper = styled.div`
  // margin: 60px 0 60px 0;
  width: 100%;
  ${({ theme }) => theme.mq.atTablet`
        margin: 60px 0 60px 0;
    `}}
`;

export const MobileHandWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mq.atTablet`
        display: none;
    `}}
`;
