import React from 'react'
import { IoCameraOutline } from "react-icons/io5";

const PhotoButton = ({ square }) => {
    return (
        <label
            htmlFor={square ? 'cover' : "profile"}
            className={`flex items-center justify-center gap-2 bg-blue-700 text-sm font-medium text-white hover:bg-opacity-80 cursor-pointer
            ${square ? 'rounded-md px-3 py-1' : 'rounded-full p-2'}`}
        >
            <input
                type='file'
                id={square ? 'cover' : "profile"}
                name={square ? 'cover' : "profile"}
                className='hidden'
            />

            <IoCameraOutline size={20} />

            {square && <span>Edit</span>}
        </label>
    )
}

export default PhotoButton