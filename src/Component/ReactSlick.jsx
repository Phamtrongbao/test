import React, { Fragment } from 'react'
import Slider from "react-slick";
import { PlayCircleFilled } from '@ant-design/icons';
export default function ReactSlick() {
    const img = [
        {
            img: "https://yalantis.com/_next/static/images/video_review_ron-b166b7bb1f80331b4ac90abd9d78bfc0.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_roy-e74eda2607700fd559c88e94bfc49563.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_mark-b8e937a2f08d1e81cb3209eef169f5ab.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_simon-a8677738954be5eff1dc2006c5a18aa1.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_sergio-4da402e569fab18e9779c4809c250d39.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_alejandro-246c727490f897aa1ec9764de82d0404.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_alejandro-246c727490f897aa1ec9764de82d0404.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_andrew-25efbd59785e5f26a8f2ecffb51bd0b4.jpg",

        },
        {
            img: "https://yalantis.com/_next/static/images/video_review_sergei-a67746a39009fe38e35f7241345bd8a9.jpg"
        }
    ]
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const renderImg = () => {
        return img.map((item, index) => {
            return <Fragment>
                <div className='card-video'>
                    <img src={item.img} className="img-video" />
                    <div className="modal-video">
                        <button className="video-btn" data-toggle="modal" data-target="#exampleModal">
                            <PlayCircleFilled style={{ fontSize: 50, color: 'white' }} />
                        </button>
                        <div className='ml-4'>
                            <h3>RON BUILLS</h3>
                            <p>president and founder</p>
                        </div>

                    </div>
                    <div className="title-video">
                        <p style={{ marginTop: -60, color: '#FFFF' }}>What fascinated me the most is how invested the Yalantis development team is, and how they often exceeded expectations in what we were trying to accomplish in terms of timeframes.</p>
                    </div>
                </div>

            </Fragment>
        })
    }


    return (
        <Fragment>
            <Slider {...settings} >
                {renderImg()}

            </Slider>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="fram mr-5" >
                            <iframe style={{ marginRight: 200 }} width="1075" height="614" src="https://www.youtube.com/embed/6HHoy_OsPMM" title="Video testimonial of Truhoo, a real estate platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>




    )
}
