import React from 'react'
import Slider from "react-slick";
export default function Carousel() {
    const img = [
        {
            img: "https://yalantis.com/_next/static/images/certified_associate_in_python_programming-3a4141ab2b318c63e120bd4720598b86.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/pmp-ad097f58e8dd6737a3c3f37b66533367.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/cks-201190a64f08efeae01baa7ce73e76e3.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/togaf-6d8d8d6d129224708d50489a28a016b8.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/aws-dfd49d6e81057ec100f0cea4a2c9353f.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/iiba-c1ffb8a6be466034808ece8225f31272.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/cspo-a40ff89a4a1e24eebe4e98ebd474b987.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/certified_associate_in_python_programming-3a4141ab2b318c63e120bd4720598b86.svg",

        },
        {
            img: "https://yalantis.com/_next/static/images/cks-201190a64f08efeae01baa7ce73e76e3.svg"
        }
    ]
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: "linear",
        rtl: false,
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

    const renderCarrousel = () => {
        return img.map((item, index) => {
            return <img style={{ width: "80%", height: 50, objectFit: 'contain' }} src={item.img} key={index} alt="" />


        })
    }
    return (

        <div className='mt-5 mb-5'> <Slider {...settings}>
            {renderCarrousel()}
        </Slider> </div>
    )
}
