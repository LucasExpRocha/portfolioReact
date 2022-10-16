import { Carousel } from "./styles"

import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

export function SlideProjects({req}){
    return (
        <>
            {
                req.map((course) => {
                    return (
                        <Carousel key={course.courseId}>
                            <h4>{course.courseName}</h4>
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                loop={true}
                                coverflowEffect={{
                                rotate: 34,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    course.projects.map(project => {
                                        return(
                                            <SwiperSlide key={project.name}>
                                                <Link to={`/projects/${course.courseName}/${project.id}`}>
                                                    <img src={project.image} />
                                                    <div>
                                                        <p><GiClick/> <span>Clique aqui!</span></p>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </Carousel>
                    )
                })
            }
        </>
    )
}