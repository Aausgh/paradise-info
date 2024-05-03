import React from 'react'

const TopTable = ({ t }) => {
  return (
    <div className='relative z-10 grid grid-cols-10 py-2'>

      <span className='absolute left-0 yop-0 -z-10 h-full rounded-md bg-gray-200 dark:bg-gray-700' style={{ width: `${t.percent}%` }}></span>

      <span className='col-span-6 text-sm pl-3'>{t.url}</span>
      <span className='col-span-2 text-sm text-center'>
        {t.views}
      </span>

      <span className='col-span-2 text-sm text-right'>
        {t.uniques}
      </span>
    </div>
  )
}

export default TopTable