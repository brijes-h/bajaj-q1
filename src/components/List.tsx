import React from 'react'

function List({ skill }: any) {
    return (
        <div className='bg-[#FFDD76] opacity-80 px-4 h-8 text-[#0D1821] rounded-sm m-2 flex justify-center items-center'>{skill}</div>
    )
}

export default List