import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Footer from "./footer"
import Nav from "./nav"
import useSiteMetadata from './SiteMetadata'
import "../sass/post.scss"

const TemplateWrapper = ({children}) =>{
  const { title, description} = useSiteMetadata()
  return (
    <div className = "layoutWrapper">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Nav/>
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
