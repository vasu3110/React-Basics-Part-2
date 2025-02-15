import React from 'react'

function Hello() {
  let myName='Vasu';
  let fullName=()=>{
    return 'Vasu Sharma'
  }
  return (
    <h3>Hello this is the future speaking.I am your master {fullName()}</h3>
  )
}

export default Hello