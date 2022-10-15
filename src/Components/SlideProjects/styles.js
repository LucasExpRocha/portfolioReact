import styled from "styled-components";

export const Carousel = styled.section`
   .swiper {
    width: 90%;
    padding-top: 1rem;
    padding-bottom: 4rem;
  }
  
  .swiper-slide {
    background-position: center;
    width: 300px;
    height: 300px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  @media (max-width: 375px) {
    .swiper {
    width: 100%;
  }
  
  .swiper-slide {
    background-position: center;
    object-fit: cover;
    width: 70vw;
  }
  }
`;