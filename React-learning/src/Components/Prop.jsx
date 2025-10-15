import React from 'react'

const Prop = (props) => {
  return (
    <div>
      <h1>This is Prop Component</h1>
      <h3>I am {props.name} from {props.city}</h3>
    </div>
  )
}

export default Prop
