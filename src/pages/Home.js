import React from 'react'
import About from '../components/Home/About'
import Products from '../components/Home/Products'
import Slider from '../components/Home/Slider'
import Experts from '../components/Home/Experts'
import Subscribe from '../components/Home/Subscribe'
import Blog from '../components/Home/Blog'
import Testimonials from '../components/Home/Testimonials'
import Instagram from '../components/Home/Instagram'

function Home() {
  return (
    <div>
      <Slider />
      <Products />
      <About />
      <Experts />
      <Subscribe />
      <Blog />
      <Testimonials />
      <Instagram />
    </div>
  )
}

export default Home