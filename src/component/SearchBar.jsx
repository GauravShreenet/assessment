import React from 'react'

export const SearchBar = () => {
    return (
        <div className='w-[80vh]'>
            <div className='flex flex-wrap items-center justify-between uppercase text-white text-xl font-medium'>
                <div className='flex gap-2'>
                    <span className='cursor-pointer hover:text-red-400'>buy</span><span className='cursor-pointer hover:text-red-400'>rent</span>
                </div>
                <div className='flex gap-2'>
                    <span className='cursor-pointer hover:text-red-400'>agent</span><span className='cursor-pointer hover:text-red-400'>signup</span>|<span className='cursor-pointer hover:text-red-400'>signin</span>
                </div>
            </div>
            <div>
                <form className="mx-auto">
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-dark">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-red-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Properties by Postcode, Suburb or City..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
