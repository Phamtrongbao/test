import React from 'react'

export default function Award() {
    const img = [
        "https://yalantis.com/static/certificates/pmi.png",
        "https://yalantis.com/static/certificates/iba.png",
        "https://yalantis.com/static/certificates/amazon.png",
        "https://yalantis.com/static/certificates/open_group.png",
        "https://yalantis.com/static/certificates/scrum-org.png",
        "https://yalantis.com/static/certificates/safe.png",
        "https://yalantis.com/static/certificates/sert_12.png",
        "https://yalantis.com/static/certificates/sert_8.png",
        "https://yalantis.com/static/certificates/sert_13.png",
        "https://yalantis.com/static/certificates/sert_14.png",
        "https://yalantis.com/static/certificates/sert_11.png",
        "https://yalantis.com/static/certificates/sert_9.png",
        "https://yalantis.com/static/certificates/sert_15.png",
        "https://yalantis.com/static/certificates/sert_10.png",
        "https://yalantis.com/static/certificates/sert_16.png"
    ]

    const renderImg = () => {
        return img.map((item, index) => {
            return <div className="col-4 mt-5">
                <img src={item} key={index} style={{ width: '100%', height: 100, objectFit: 'contain' }} alt="" />
            </div>

        })
    }
    return (
        <div className='award pb-5'>
            <div className="container">
                <h1 style={{ textAlign: 'center', paddingTop: 100 }}>Awards and certifications</h1>
                <div className="row">
                    {renderImg()}
                </div>
            </div>


        </div>
    )
}
