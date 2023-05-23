
import React from 'react';



export default function Banner() {

    return (
        <div className="banner">
            <div className='container-fluid'>
                <div className="row">
                    <div className="title col-6">
                        <h1>
                            <p style={{ color: '#fd5d14e6' }}>TRUSTED</p>
                            <p style={{ color: '#ffff' }}>SOFTWARE ENGINEERING</p>
                            <p style={{ color: '#ffff' }}>AND IT CONSULTING</p>
                            <p style={{ color: '#fd5d14e6' }}>COMPANY</p>
                        </h1>
                    </div>
                    <div className="col-6">
                        <img className='canvas' src="./canvas.png"  alt="" />
                    </div>
                </div>

            </div>
        </div>

    )
}
