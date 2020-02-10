import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    ${({ theme }) => theme.text.bm}
    color: ${({ theme, invert }) => invert ? 'white' : theme.colours.greyDark};
    font-weight: 800;
    width: auto;
    background-color: white;
    height: 100px;
    width: 100px;
    & > div {
        height: 60px;
    }
}
`