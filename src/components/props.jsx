import React, { useState } from 'react'

function Props({ username }) {
  const [showMessage, setShowMessage] = useState(false)

  const handleClick = () => {
    if (showMessage) {
      setShowMessage(false)
    } else {
      setShowMessage(true)
    }
  }
    
  return (
    <div>
      <p>Name: {username}</p>
      <button onClick={handleClick}>CLICK ME </button>
      {showMessage && <p>Hello 99 dev</p>}
    </div>
  )
}

export default Props