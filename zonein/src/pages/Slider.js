import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import React from 'react'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function CustomSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    const items = ['/images/0.png', '/images/1.png', '/images/2.png', '/images/3.png'];
    const itemList = items.map((item, index) =>
        <Wrap key={index}>
            <H1>{index}</H1>
            <a>
                <img src={item} alt="/" />
            </a>
        </Wrap>
    )
    console.log(itemList);
    return (
        <DIV>
            <Carousel {...settings} >
                {itemList}
            </Carousel>
        </DIV>
    )
}

export default CustomSlider


const Carousel = styled(Slider)`
    margin-top: 5vw;
    height: 100%;
    margin-bottom: 5vw;
    & > button {
        opacity: 1;
        height: 10px;
        width: 5vw;
        &:hover{
            opacity:1;
            transition: opacity 0.2s;
        }
    }

    ul li button {
        &:before{
            position: relative;
            font-size: 10px;
            visibility: hidden;
            color: rgb(150,158,171);
            cursor: pointer;
        }
    }
    li.slick-active button:before{
        color: white;
    }
    .slick-list{
        overflow: initial;
    }

    .slick-prev{
        height: 100px;
    }
    .slick-next {
        height: 100px;
    }
`;

const Wrap = styled.div`
    border-radius: 4px;
    position: relative;
    height: 100%;
    a{  
        width: 80%
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
        display: block;
        position: relative;
        padding : 4px;
        img{
            margin-left: 5vw;
            width: 90vw;
            height: 80vh;
        }

        &:hover{
            padding: 0;
            border: 4px solid rgba(249,249,249 , 0.8);
            transition-duration: 300ms; 
        }
    }

`
const H1 = styled.h1`
color:white;
font-size:50px;
margin-left:50vw;
`
const DIV = styled.div`
overflow-y: hidden; /* Hide vertical scrollbar */
overflow-x: hidden; /* Hide horizontal scrollbar */
height: 100%;

`