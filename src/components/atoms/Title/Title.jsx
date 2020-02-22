import React from 'react'
import {Wrapper} from './title.style'

const Title = (props) => {
    const {title, subtitle} = props

    return (
        <Wrapper>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </Wrapper>
    )
}


export default Title;
