import React, { Fragment } from 'react'
import Footer from '../components/footer/Footer'
import Navigation from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Text from '../components/text/Text'


export default function Home() {
  return (
     <Fragment>
      <Navigation/>
      <Text/>
      <Header/>
      <Footer/>
     </Fragment>
  )
}
