import React from 'react'
import AboutText from './AboutComponents/AboutText'
import AboutVideo from './AboutComponents/AboutVideo'

function About() {
    return (
        <section id="about">
            <div className="container py-5">
                <div className="row py-5">
                    <AboutVideo />
                    <AboutText />
                </div>
            </div>
        </section>

    )
}

export default About