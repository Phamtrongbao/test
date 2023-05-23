import React from 'react'

export default function CaseStudies() {
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var caseElement = document.querySelector('.case');

        if (scrollPosition > 7000) {
            caseElement.classList.add('yellow');
        } else {
            caseElement.classList.remove('yellow');
        }
    });
    return (
        <div className='case pt-5'>
            <div className="container-fluid">
                <h1>CASE STUDIES</h1>

                <div className="row mt-5">
                    <div className="col-6">
                        <h2 className='mt-5'>HealthFul</h2>
                        <p className='mt-5'>An all-around HIPAA-compliant solution for digitizing healthcare processes that:</p>
                        <ul>
                            <li><p>Enables telemedicine with convenient and quick scheduling and payments</p></li>
                            <li><p>Allows real-time communication and collaboration between patients and caregivers</p></li>
                            <li><p>Supplies patient monitoring and medical device integration</p></li>
                            <li><p>Ensures security up to the high-level industry standards</p></li>
                        </ul>
                        <button className='btn-case'>SEE FULL CASE STUDIES</button>
                    </div>
                    <div className="col-6">
                        <img style={{ width: '100%', height: 650, objectFit: 'contain' }} src="https://yalantis.com/_next/static/images/ipad_healtfully-bc54e093cd57a1847bb1ff788fdb47e7.png" alt="" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <img style={{ width: '100%', height: 650, objectFit: 'contain' }} src="https://yalantis.com/_next/static/images/macbook_tms-f4054a253ee1311731ce2e88ba419181.png" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className='mt-5'>TRANSTATION MANAGER SYSTERM</h2>
                        <p className='mt-5'>An all-around HIPAA-compliant solution for digitizing healthcare processes that:</p>
                        <ul>
                            <li><p>Enables telemedicine with convenient and quick scheduling and payments</p></li>
                            <li><p>Allows real-time communication and collaboration between patients and caregivers</p></li>
                            <li><p>Supplies patient monitoring and medical device integration</p></li>
                            <li><p>Ensures security up to the high-level industry standards</p></li>
                        </ul>
                        <button className='btn-case'>SEE FULL CASE STUDIES</button>
                    </div>

                </div>
                <div className="row mt-5">

                    <div className="col-6">
                        <h2 className='mt-5'>WISDM</h2>
                        <p className='mt-5'>An all-around HIPAA-compliant solution for digitizing healthcare processes that:</p>
                        <ul>
                            <li><p>Enables telemedicine with convenient and quick scheduling and payments</p></li>
                            <li><p>Allows real-time communication and collaboration between patients and caregivers</p></li>
                            <li><p>Supplies patient monitoring and medical device integration</p></li>
                            <li><p>Ensures security up to the high-level industry standards</p></li>
                        </ul>
                        <button className='btn-case'>SEE FULL CASE STUDIES</button>
                    </div>
                    <div className="col-6">
                        <img style={{ width: '100%', height: 650, objectFit: 'contain' }} src="https://yalantis.com/_next/static/images/wisDM_web-d2cb380e281d281914ad82cbbd327d1c.png" alt="" />
                    </div>
                </div>
                <div>
                    <h3 style={{ textAlign: 'center', color: '#FFFF', paddingTop: 10 }}>
                        WHAT MORE STORIES LIKE
                    </h3>
                    <h5 style={{ textAlign: 'center', color: '#fd5d14e6', paddingTop: 20 }}>See All Case Studies</h5>
                </div>
            </div>
        </div>
    )
}
