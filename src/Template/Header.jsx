import React from 'react'
import "../Template/template.css"
import { AlignLeftOutlined } from '@ant-design/icons'
import Banner from './Banner'
import { useEffect } from 'react';
export default function Header() {
    useEffect(() => {
        window.addEventListener("scroll", function () {
            var header = document.querySelector(".header-child");
            header.classList.toggle("sticky", window.scrollY > 0);
        });
    }, []);

    return (
        <header className='Header'>
            <div className="header">
                <div className="header-child">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg ">
                            <a className="navbar-brand" href="#">Yalantis</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto" >
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">WORKS <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SERVICES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">EXPERTISE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">INDUSTRIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">COMPANY</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">BLOG</a>
                                    </li>

                                    <div className="contact">
                                        <button className="ContactUs-btn mt-3">
                                            CONTACT US
                                        </button>
                                        <button className="toggle-header">
                                            <AlignLeftOutlined style={{ color: "#FFFF", fontSize: 30 }} />
                                        </button>
                                    </div>

                                </ul>

                            </div>
                        </nav>

                    </div>
                </div>

            </div>


            <Banner />
        </header>


    )
}
