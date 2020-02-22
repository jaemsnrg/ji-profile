import React from 'react'
import {Wrapper} from './textBlock.style'

const TextBlock = (props) => {
    const {text} = props

    return (
        <Wrapper dangerouslySetInnerHTML={{__html:text}} />
    )
}


export default TextBlock;
