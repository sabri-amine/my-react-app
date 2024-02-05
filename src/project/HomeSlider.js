import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import imge1 from "../Images/imge1.jpg"
import imge2 from "../Images/imge2.jpeg"
import imge4 from "../Images/img10.png"
import imge5 from "../Images/imge5.jpeg"

const StyledSlider = styled(Slider)` 
    width: 100%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: .4;
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
                <img src={imge1} alt="Ad 2" />
            </SlideItem>
            <SlideItem>
                <img src={imge2} alt="Ad 1" />
            </SlideItem>
            <SlideItem>
                <img src={imge4} alt="Ad 4" />
            </SlideItem>
            <SlideItem>
                <img src={imge5 } alt="Ad 3" />
            </SlideItem>
        </StyledSlider>
    );
};

export default SingleSlider;

