import React from 'react'

function Random() {
  let number=Math.random()*10;
  return (
    <h1>Random number is:{Math.round(number)}</h1>
  )
}

export default Random