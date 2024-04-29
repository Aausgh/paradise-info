import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ChatCard = ({ c }) => {
    return (
        <Link href={'/'} className='flex items-center gap-5 px-7 py-3 hover:bg-gray-300'>

            <div className='relative h-18 w-18 rounded-full'>
                <Image src={c.pp} alt="profile" width={65} height={65} loading='lazy' />

                {c.status === 'online'
                    ? (
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#10b981] "></span>
                    )
                    : c.status === 'offline' ? (
                        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#dd3544] "></span>
                    )
                        : (
                            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#feba01] "></span>
                        )
                }
            </div>

            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col'>
                    <h5 className='font-medium text-black'>{c.name}</h5>
                    <p>
                        <span className='text-sm text-black'>{c.msg}</span>
                        <span className='text-xs text-gray-500'> . {c.time} min</span>
                    </p>
                </div>

                {c.notification > 0 &&
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700">
                        <span className="text-sm font-medium text-white">{c.notification}</span>
                    </div>
                }
            </div>
        </Link>
    )
}

export default ChatCard