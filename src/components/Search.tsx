import React from 'react'

function Search({
    searchQuery,
    setSearchQuery
}: any): React.JSX.Element {
    return (
        <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='p-2 rounded-sm w-80'
        />
    )
}

export default Search