import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import img1 from "../Images/selider.1.jpg"
import img12 from "../Images/106042264.webp"
import img13 from "../Images/img13.webp"
import img14 from "../Images/img3.jpg"
import img11 from "../Images/img11.webp"

const StyledSlider = styled(Slider)` 
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const SlideItem = styled.div`
    img {
        width: 100%;
        height:650px;
        transition:opacity 0.5s ease;
    }
`;

const SingleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed:3500, 
    };

    return (
        <StyledSlider {...settings}>
            <SlideItem>
                <img src={img1} alt="Ad 2" />
            </SlideItem>
            <SlideItem>
                <img src={img11} alt="Ad 1" />
            </SlideItem>
            <SlideItem>
                <img src={img12 } alt="Ad 3" />
            </SlideItem>
            <SlideItem>
                <img src={img14} alt="Ad 4" />
            </SlideItem>
        </StyledSlider>
    );
};

export default SingleSlider;

