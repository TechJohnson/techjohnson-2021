import React from "react"
import Announcement from "../components/announcement"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import Showcase from "./homepageShowcase"

const Layout = ({ children }) => {

  return (
    <div>

      <Announcement />
      
      <Navigation />  

      <main>{children}</main>

      <Footer />

    </div>

  
  )

}

export default Layout
