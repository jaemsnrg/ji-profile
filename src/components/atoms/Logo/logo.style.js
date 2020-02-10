import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    user-select: none;
    ${({ theme }) => theme.text.bm}
    color: ${({ theme, invert }) => invert ? 'white' : theme.colours.greyDark};
    font-weight: 800;
    width: auto;
}
`

export const Text = styled.div`
    ${({ theme }) => theme.text.bm}
    color: ${({ theme }) => theme.colours.greyDark};
    font-weight: 800;
    border-bottom: 4px solid ${({ theme }) => theme.colours.greyDark};
    line-height: 40px;
}
`