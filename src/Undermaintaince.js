import React from 'react'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/under-maintaince.jpg'

export const Undermaintaince = () => {
  return (
    <>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
      </div>
    </section>
        <Footer />
    </>
  )
}
