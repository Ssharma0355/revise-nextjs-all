import React from 'react'

const About = () => {
    console.log("Is it run on server or client?")
  return (
    <div>
      About 
      <h1>This is server Component</h1>
      Wee can use buttons events and state only inside the client component not in server component
    </div>
  )
}

export default About
