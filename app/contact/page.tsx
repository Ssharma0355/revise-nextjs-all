"use client"
import React, { useState } from 'react'

const Contact = () => {
    console.log("Is it run on clinet or server?")
    const [count, setCount] = useState(0);
  return (
    <div>
      Contact
      <h1>This is Client Component</h1>
      <h1>See the state changes {count}</h1>
      Wee can use buttons events and state only inside the client component not in server component
      <br />
      <button onClick={()=>setCount(count+1)}>Click me to add</button>
      <br />
      <button onClick={()=>setCount(count-1)}>Click me to substract</button>

    </div>
  )
}

export default Contact
