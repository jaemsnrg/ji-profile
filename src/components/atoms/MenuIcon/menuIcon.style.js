import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    user-select: none;
    font-weight: 600;
    cursor: pointer;
    width: auto;
}
`

export const Text = styled.div`
    ${({ theme }) => theme.text.bm}
    color: ${({ theme }) => theme.colours.greyDark};
    line-height: 40px;
}
`