import React from 'react'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-7">
                        <p style={{ color: '#FFFF', fontFamily: 'revert', fontWeight: 600 }}>We use cookies to personalize our services and improve your experience on this website and its subdomains. We may use certain personal data for analytics and marketing purposes</p>
                    </div>
                    <div className="col-5">
                        <div style={{ display: 'flex', color: '#FFFF', fontFamily: 'revert', fontWeight: 600, justifyContent: 'flex-end' }}>
                            <a href="" style={{ textDecoration: 'none', paddingTop: 10, color: '#FFFF' }}>I need to see Privacy Pollicy First</a>
                            <button className='ContactUs-btn' style={{ marginLeft: 15 }}>
                                I AGREE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
