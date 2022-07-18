import React from 'react'
import {ImLocation} from "react-icons/im"

const Card = (props) => {
  return (
    <div className='h-[168px] w-[470px] bg-slate-300 flex mx-auto'>
        <div className='h-full w-[125px] rounded-[5px]'>
            <img src={props.place.imageUrl} alt="" className='h-full rounded-[5px]'/>
        </div>
        <div className='pl-[19px]'>
            <div className='flex items-center'>
                <ImLocation className='text-[#F55A5A] mr-2' />
                <p className='mr-2'>{props.place.location}</p>
                <a className="text-sm text-gray-500 underline" target="_blank" href={`${props.place.googleMapsUrl}`}>View on Google Maps</a>
            </div>
            <h1 className='text-bold text-2xl my-2'>{props.place.title}</h1>
        </div>
    </div>
  )
}

export default Card