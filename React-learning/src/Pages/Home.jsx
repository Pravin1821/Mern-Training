import React from 'react'
import State from '../Hooks/State'
import Like from '../Hooks/Like'
import Effect from '../Hooks/effect'

function Home() {
  return (
    <div>
      <h1>Welcome to Home page</h1>
      <p>This is the home page content.</p>
      <p>Additional information can go here.</p>
      <p>Feel free to explore the website.</p>
      <State />
      <Like />
      {/* <Effect /> */}
    </div>
  )
}

export default Home
