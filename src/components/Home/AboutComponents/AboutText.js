import React from 'react'

function AboutText() {
    return (
        <div className="col-lg-6">
            <div className="about-text mt-5 mt-lg-0 px-lg-5">
                <h1>
                    Suprise Your <span>Valentine!</span> Let us arrange a smile.
                </h1>
                <p className="py-3">
                    Where flowers are our inspiration to create lasting memories. Whatever the
                    occasion...
                </p>
                <ul className="list-unstyled">
                    <li className="mt-3">
                        <img src="assets/img/h1-custom-icon.png" className="mr-2" alt="" /> Hand
                        picked just for you.
                    </li>
                    <li className="mt-3">
                        <img src="assets/img/h1-custom-icon.png" className="mr-2" alt="" />
                        {"{"}" "{"}"}
                        Unique flower arrangements
                    </li>
                    <li className="mt-3">
                        <img src="assets/img/h1-custom-icon.png" className="mr-2" alt="" /> Best
                        way to say you care.
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default AboutText