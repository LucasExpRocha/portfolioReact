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

  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
    height: 100%;

    position: relative;
    margin: 0 auto;

  }

  .swiper-slide div {
    display: none;
  }

  .swiper-slide-active div {
    display: block;
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
  
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    p {
      display: flex;
      align-items: center;
      gap: .5rem;

      padding: .5rem 1rem;
      border-radius: .5rem;

      color: white;
      background-color: rgba(0,0,0,.5);
    }
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