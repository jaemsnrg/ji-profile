import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 170px;
    & ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    & li {
        
        
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background-color: ${({theme}) => theme.colours.hotPink};
    }
}
`
