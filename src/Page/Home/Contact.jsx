import React from 'react'
import { InstagramFilled, FacebookFilled, YoutubeFilled, GithubFilled } from '@ant-design/icons'
export default function Contact() {
    return (
        <div className="cont">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3" style={{ color: '#FFFF', lineHeight: 3 }}>
                        <h4 style={{ paddingLeft: 40 }}>Works</h4>
                        <ul>
                            <li>ALL CASE STUDIES</li>
                            <li>Health platform</li>
                            <li>Communication</li>
                            <li>Transport</li>
                        </ul>

                    </div>
                    <div className="col-3" style={{ color: '#FFFF', lineHeight: 3 }}>
                        <h4 style={{ paddingLeft: 40 }}>Service</h4>
                        <ul>
                            <li>ALL CASE STUDIES</li>
                            <li>Health platform</li>
                            <li>Communication</li>
                            <li>Transport</li>
                        </ul>

                    </div>
                    <div className="col-3" style={{ color: '#FFFF', lineHeight: 3 }}>
                        <h4 style={{ paddingLeft: 40 }}>Company</h4>
                        <ul>
                            <li>ALL CASE STUDIES</li>
                            <li>Health platform</li>
                            <li>Communication</li>
                            <li>Transport</li>
                        </ul>

                    </div>
                    <div className="col-3" style={{ color: '#FFFF', lineHeight: 3 }}>
                        <button className="ContactUs-btn">CONTACT</button>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: 30, marginRight: 120, color: 'grey' }}>
                            <div><InstagramFilled /></div>
                            <div><GithubFilled /></div>
                            <div><FacebookFilled /></div>
                            <div><YoutubeFilled /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
