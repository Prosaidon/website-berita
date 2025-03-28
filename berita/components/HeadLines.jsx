import React from 'react'
import LoadingSpinnerComponent from 'react-spinners-components'
import Marquee from 'react-fast-marquee'
import Link from 'next/link'

const HeadLines = ({news}) => {

  return (
    <div className='bg-[#fbd0f5] shadow flex flex-wrap'>
        <div className='flex md:w-[170px] w-full bg-[#dddddd] relative after:absolute after:bg-[#dddddd] after:w-[20px] after:left-[160px] after:skew-x-[20deg] after:top-0 after:bottom-0 after:z-30'>
          <div className='md:pl-4  pl-4 w-full flex justify-start items-center gap-x-1'>
            <span><LoadingSpinnerComponent type='Ripple' colors={['#800000','#c80000']} size={'30px'}/></span>
            <h2 className='text-[#333333] font-semibold text-lg'>TERPOPULER</h2>
          </div>
        </div>
        <div className='flex md:w-[calc(100%-170px)] w-full'>
          <div className='flex w-full justify-start items-center'>
            <Marquee>
              {Object.values(news)
                .flat() // Menggabungkan semua kategori menjadi satu array
                .map((n) => (
                  <Link key={n.slug} className='block font-semibold hover:text-[#c80000] pr-12 text-sm' 
                    href={`/news/${n.slug}`}>
                    {n.title}
                  </Link>
              ))}
            </Marquee>
          </div>
        </div>
    </div>
  )
}

export default HeadLines
