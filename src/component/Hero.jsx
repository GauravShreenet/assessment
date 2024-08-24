import React from 'react'
import background from '../assets/pixelcut-export.jpeg'
import { Menu } from './Menu'
import { SearchBar } from './SearchBar'

export const Hero = () => {
    return (
        <>
            <div className='relative h-screen w-full'>
                <Menu />
                <div className='h-[80vh]'>
                    <div className='w-full h-[80vh] relative'>
                        <img src={background} alt="HeroImg" className='object-cover h-[80vh] w-full' />
                        <div className='flex justify-center' style={{ position: 'absolute', top: '55%', width: '100%' }}>
                            <div className='w-full flex justify-center'>
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
