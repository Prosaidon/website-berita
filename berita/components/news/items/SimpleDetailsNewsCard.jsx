import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SimpleDetailsNewsCard = ({ news, type, height }) => {
  return (
    <div className='bg-white shadow'>
      <div className='group relative overflow-hidden'>
        <div className="w-full relative" style={{ height: `${height}px` }}>
          <Image 
            src={news?.image}
            alt="image"
            width={400} // Atur ukuran tetap
            height={250} // Sesuaikan tinggi agar seragam
            className="object-cover w-full h-full"
            unoptimized={true}
            priority
          />
        </div>
        <Link 
          className='w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300' 
          href={'#'}></Link>
        <div className='left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2'>
          <div className='px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]'>{news.category}</div>
        </div>
      </div>
      <div className='p-5'>
        <Link 
          className='w-full h-full block cursor-pointer text-lg font-semibold text-slate-900 hover:underline' 
          href={`/news/${news.slug}`}>
          {news.title}
        </Link>
        <div className='flex gap-x-2 text-xs font-normal text-slate-600'>
          <span>{news.date}</span>
          <span>{news.WriterName}</span>
        </div>
      </div>
    </div>
  )
}

export default SimpleDetailsNewsCard
