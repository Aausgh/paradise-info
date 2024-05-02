import PhotoButton from '@/components/PhotoButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { FaDribbble, FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const page = () => {
    return (
        <div className='max-w-[60rem] mx-auto'>

            <div className='flex flex-col gap-3 mb-6 md:flex-row md:items-center md:justify-between'>
                <h2 className="text-2xl font-semibold text-black dark:text-white">Profile</h2>

                <ol className='flex items-center gap-2'>
                    <li>
                        <Link href={'/'} className='font-medium'>Dashboard /</Link>
                    </li>
                    <li className='font-medium text-blue-500'>Profile</li>
                </ol>
            </div>

            <div className=' rounded-md bg-white dark:bg-darkBox shadow-md'>

                {/* Cover */}
                <div className='relative z-20 h-35 md:h-65'>
                    <Image src='https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fcover%2Fcover-01.png&w=1080&q=75' width={970} height={260} loading='lazy' className='h-full w-full rounded-tl-md rounded-tr-md' />

                    <div className='absolute bottom-2 right-4 z-10'>
                        <PhotoButton square={true} />
                    </div>
                </div>


                <div className='px-4 pb-6 text-center lg:pb-8 xl:pb-12'>

                    {/* Profile Image */}
                    <div className='relative z-30 mx-auto h-44 w-44 rounded-full bg-white/20 p-3 backdrop-blur -mt-20'>

                        <div className='relative drop-shadow-md'>
                            <Image src='https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fuser-06.png&w=256&q=75' width={160} height={160} loading='lazy' className='h-full w-full rounded-full' />

                            <div className='absolute bottom-0 right-0 z-10'>
                                <PhotoButton square={false} />
                            </div>
                        </div>
                    </div>


                    <div className='mt-4'>
                        {/* Name and designation */}
                        <h1 className='text-2xl font-semibold text-black dark:text-white'> Danish Heilium</h1>
                        <p className='font-medium text-gray-400'> Ui/Ux Designer</p>


                        {/* Follow and following count */}
                        <div className='grid grid-cols-3 rounded-md shadow-md bg-white dark:bg-[#37414e] my-5 max-w-96 mx-auto py-3'>
                            <div className='flex flex-col md:flex-row items-center justify-center gap-1 border-r px-4'>
                                <span className='font-semibold text-black dark:text-white'>259</span>
                                <span className='text-sm text-gray-400'>Posts</span>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center gap-1 border-r px-4'>
                                <span className='font-semibold text-black dark:text-white'>129K</span>
                                <span className='text-sm text-gray-400'>Followers</span>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center gap-1 px-4'>
                                <span className='font-semibold text-black dark:text-white'>2K</span>
                                <span className='text-sm text-gray-400'>Following</span>
                            </div>
                        </div>

                        {/* About me */}
                        <div className='mx-auto max-w-[45rem]'>
                            <h4 className="font-semibold text-black dark:text-white">About Me</h4>

                            <p className="mt-4 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus ultricies. Sed vel aliquet libero. Nunc a augue fermentum, pharetra ligula sed, aliquam lacus.</p>
                        </div>

                        {/* Social links */}
                        <div className="mt-6">
                            <h4 className="mb-3 font-medium text-black dark:text-white">Follow me on</h4>
                            <div className="flex items-center justify-center gap-3 text-gray-400">
                                <Link className="hover:text-blue-500" href='#'>
                                    <FaFacebookF size={20} />
                                </Link>

                                <Link className="hover:text-blue-500" href="#">
                                    <FaTwitter size={20} />
                                </Link>

                                <Link className="hover:text-blue-500" href="#">
                                    <FaLinkedinIn size={20} />
                                </Link>

                                <Link className="hover:text-blue-500" href="#">
                                    <FaDribbble size={20} />
                                </Link>

                                <Link className="hover:text-blue-500" href="#">
                                    <FaGithub size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page