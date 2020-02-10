import styled from 'styled-components';

export const Wrapper = styled.div`
    user-select: none;
    ${({ theme }) => theme.text.bm}
    color: ${({ theme }) => theme.colours.greyDark};
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
`

