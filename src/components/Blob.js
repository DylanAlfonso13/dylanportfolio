import React from 'react';

const Blob = ({ smtop, top, animate }) => {
    return (
        <div
            aria-hidden="true"
            className={`absolute inset-x-0 sm:inset-x-72 ${top} -z-10 transform-gpu overflow-hidden blur-3xl sm:${smtop}  ${animate} max-w-[889px] overflow-hidden`}
        >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3B82F6" d="M23.1,-30.8C32.2,-30.1,43.4,-27.5,51,-20.5C58.6,-13.5,62.5,-2,63.6,11C64.6,24,62.8,38.4,56.1,51.7C49.4,65,37.8,77.1,26,73.8C14.2,70.6,2.2,52.1,-13,46.5C-28.1,41,-46.5,48.6,-58.6,45C-70.7,41.4,-76.6,26.6,-72,14.5C-67.3,2.3,-51.9,-7.2,-40.6,-12.9C-29.2,-18.7,-21.9,-20.6,-15.8,-22.7C-9.7,-24.8,-4.8,-27,1.1,-28.6C7,-30.3,14,-31.5,23.1,-30.8Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
}

export default Blob;