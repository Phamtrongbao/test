import React from 'react'
import Header from '../../Template/Header'
import Footer from '../../Template/Footer'
import Card from './Card'
import ClientAbout from './ClientAbout'
import PartNer from './PartNer'
import CERTIFICATION from './CERTIFICATION'
import Carousel from '../../Component/Carousel'
import CarouselBottom from '../../Component/CarouselBottom'
import Business from './Business'
import Award from './Award'
import CaseStudies from './CaseStudies'
import Industries from './Industries'
import Email from './Email'
import Contact from './Contact'


export default function Home() {
    document.addEventListener('mousemove', e => {
        const cursor = document.querySelector('.cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    return (
        <div>
            <div class="cursor"></div>
            <Header />
            <Card />
            <ClientAbout />
            <PartNer />
            <CERTIFICATION />
            <Carousel />
            <CarouselBottom />
            <Business />
            <Award />
            <CaseStudies />
            <Industries />
            <Email />
            <Contact />
            <Footer />
        </div>
    )
}
