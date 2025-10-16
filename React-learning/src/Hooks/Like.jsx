import React from 'react'
import { useState } from 'react'
const Like = () => {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <h1>Likes : {likes}</h1>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
      <button onClick={() => setLikes(likes - 1)}>Dislike</button>
      <button onClick={() => setLikes(0)}>Reset</button>
    </div>
  )
}

export default Like
