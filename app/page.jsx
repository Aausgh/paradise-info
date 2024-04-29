

import Card from '@/components/Card'
import { Info } from '@/constants/constants'
import React from 'react'

const Home = () => {
    return (
        <div className='w-screen lg:max-w-screen-2xl  mx-auto p-4 md:p-6 xl:p-10'>

            <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-8'>

                {Info.map((i) => (
                    <Card key={i.id} i={i} />
                ))}

            </div>
        </div>
    )
}

export default Home