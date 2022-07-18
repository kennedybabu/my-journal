import React from 'react'
import {ImLocation} from "react-icons/im"

const Card = (props) => {
  return (
    <div className='h-[168px] w-[470px] flex mx-auto'>
        <div className='h-full w-[125px] rounded-[5px]'>
            <img src={props.place.imageUrl} alt="" className='h-full rounded-[5px]'/>
        </div>
        <div className='pl-[19px] flex flex-col justify-center'>
            <div className='flex items-center text-[10px]'>
                <ImLocation className='text-[#F55A5A] mr-2' />
                <p className='mr-2 uppercase'>{props.place.location}</p>
                <a className="text-[11px] text-gray-500 underline" target="_blank" href={`${props.place.googleMapsUrl}`}>View on Google Maps</a>
            </div>
            <h1 className='text-bold text-2xl my-2'>{props.place.title}</h1>
            <p className='font-bold text-sm text-[10px] text-[#2b283a]'>{props.place.startDate}-{props.place.endDate}</p>
            <p className='text-[10px] max-w-[326px]'>{props.place.description}</p>
        </div>
        <hr />
    </div>
  )
}

export default Card