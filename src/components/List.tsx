import React from 'react'

function List({ skill }: any) {
    return (
        <div className='bg-[#2E4F4F] opacity-80 px-4 h-8 text-[#FFFFFF] rounded-sm m-2 flex justify-center items-center'>{skill}</div>
    )
}

export default List