import React from 'react'
import Button from './button'

const About = async () => {
    console.log("Is it run on server or client?")
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const fetchedData = await data.json();
    console.table(fetchedData);
  return (
    <div>
      About 
      <h1>This is server Component</h1>
      Wee can use buttons events and state only inside the client component not in server component

      <p>We can call data and also add a client component like this</p>
      <Button />
    </div>
  )
}

export default About
