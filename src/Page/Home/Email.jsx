import React from 'react'

export default function Email() {
    return (
        <div className="email">
            <div className="wrap">
                <img src="https://yalantis.com/_next/static/images/background-image-39a28f94945ce82d1bc0fbef968f97e8.png" alt="" />
            </div>
            <div className="form-wrap">
                <div className="row" style={{ width: '90%' }}>
                    <div className="col-6">
                        <div className="form">
                            <div className="email-title" style={{ padding: 20, fontSize: 30 }}>
                                GOT A PROJECT IN MIND?
                                <p style={{ paddingTop: 15, fontSize: 15, color: 'grey' }}>Share the details of your project – like scope, timeframes, or business challenges. Our team will carefully study them and then we’ll figure out the next move together.</p>
                                <div className="input-form" style={{ paddingTop: 20, fontSize: 20, color: 'grey' }}>
                                    <input type="text" placeholder='FullName' style={{ paddingTop: 20, border: 'none', borderBottom: "solid 1px grey", width: "45%" }} />
                                    <input type="email" placeholder='Email' style={{ paddingTop: 20, border: 'none', borderBottom: "solid 1px grey", width: "45%" }} />
                                </div>
                                <div className="input-form" style={{ paddingTop: 20, fontSize: 20, color: 'grey' }}>
                                    <input type="text" placeholder='Company' style={{ paddingTop: 20, border: 'none', borderBottom: "solid 1px grey", width: "45%" }} />
                                    <input type="text" placeholder='PhoneNumber' style={{ paddingTop: 20, border: 'none', borderBottom: "solid 1px grey", width: "45%" }} />
                                </div>
                                <input type="text" placeholder='About' style={{ paddingTop: 40, fontSize: 20, color: 'grey', border: 'none', borderBottom: "solid 1px grey", width: "100%" }} />
                                <div className="input-check" style={{ paddingTop: 20, fontSize: 15, color: 'grey' }}>
                                    <input type="checkbox" placeholder='Company' style={{ paddingTop: 20, border: 'none', borderBottom: "solid 1px grey", width: "4%" }} />
                                    <label htmlFor="">I ACCEPT your  Policy</label>
                                    <input type="checkbox" placeholder='PhoneNumber' style={{ marginLeft: 200, paddingTop: 25, border: 'none', borderBottom: "solid 1px grey", width: "4%" }} />
                                    <label htmlFor="">Send NDA</label>
                                </div>
                                <button className='ContactUs-btn mt-5' style={{ fontSize: 15 }}>
                                    Send My Email
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-6 pl-5">
                        <div className="row">
                            <div className="col-6">
                                <div style={{ color: 'white' }}>
                                    <h5>PROJECT INQUERIES</h5>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>

                            </div>
                            <div className="col-6">
                                <div style={{ color: 'white' }}>
                                    <h5>PROJECT INQUERIES</h5>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div style={{ color: 'white' }}>
                                    <h5>PROJECT INQUERIES</h5>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-6">
                                <div style={{ color: 'white' }}>
                                    <h6>UKRAINA</h6>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>

                            </div>
                            <div className="col-6">
                                <div style={{ color: 'white' }}>
                                    <h6>ESTONIA</h6>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div style={{ color: 'white' }}>
                                    <h6>PROJECT INQUERIES</h6>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-6">
                                <div style={{ color: 'white' }}>
                                    <h5>CYBRUS</h5>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>

                            </div>
                            <div className="col-6">
                                <div style={{ color: 'white' }}>
                                    <h5>POLAND</h5>
                                    <h6>HELLO@yalantis.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
