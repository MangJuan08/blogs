import React from 'react'
import { NavbarSection } from '../components/NavbarSection'


const styleHomepage = {
    marginTop:"50px"
}

const Homepage = () => {
  return (<div>
    <NavbarSection/>
<div className="container" style={styleHomepage}>Homepage</div>
  </div>
    
  )
}

export default Homepage