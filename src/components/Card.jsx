import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div>
            {/* <img src="" alt="" /> */}
            image
        </div>
        <div>
            <h2>{props.place.title}</h2>
        </div>
    </div>
  )
}

export default Card