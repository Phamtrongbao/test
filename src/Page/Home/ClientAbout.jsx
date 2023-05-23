import React from 'react'
import '../Home/Home.css'
import ReactSlick from '../../Component/ReactSlick'
export default function ClientAbout() {
    return (
        <div className='client' style={{ height: 600 }}>
            <div className="container-fluid">
                <h1 style={{ color: '#FFFF', fontSize: 50, fontWeight: 400 }}><span style={{ color: "#fd5d14e6" }}>CLIENT REVIEWS</span> ABOUT <p>THE QUALITY OF OUR WORK</p> </h1>
                <div className="card-client mt-5">
                    <ReactSlick></ReactSlick>
                </div>

            </div>

        </div>
    )
}
