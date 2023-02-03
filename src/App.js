import React from 'react'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import QuickAction from './components/quickAction'

const App = () => {
  return (
    <div>
    <QuickAction/>
        <Header/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
