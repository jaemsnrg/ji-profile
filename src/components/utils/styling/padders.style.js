import styled from 'styled-components';

export const DefaultPadder = styled.div`
    padding: 0 24px;
    ${(props) => props.theme.mq.atTablet`
        padding: 0 64px;
    `}
    ${(props) => props.theme.mq.atDesktop`
        padding: 0 100px;
    `}
`