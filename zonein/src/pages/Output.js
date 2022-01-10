import React from 'react'
import CustomSlider from './Slider'
import styled from 'styled-components';

const Output = () => {
    return (
        <OUTPUT>
            <IMG src="./images/mindmap.png" alt="/" />
            <CustomSlider />
        </OUTPUT>
    )
}

export default Output
const IMG = styled.img`
margin-top: 50px;
margin-left: 400px;
height: 600px;
width: 800px;
`
const OUTPUT = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`