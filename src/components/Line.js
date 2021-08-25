import React from 'react'
import '../App.css'

const Line = (props) => {
  return (
    <div className="Line">
      <div className="container">
        {props.title} {props.symbol}
      </div>
    </div>
    )
}


export default Line;
