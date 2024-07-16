'use client'
import React from 'react'
import PaginationControls from './components/paginate'
import { useSearchParams } from 'next/navigation'

const data = [
  'data1',
  'data2',
  'data3',
  'data4',
  'data5',
  'data6',
  'data7',
  'data8',
  'data9',
  'data10',
  'data11',
  'data12',
  'data13',
  'data14',
  'data15',
  'data17',
  'data18',
  'data19',
  'data16',
  'data20',
  'data21',
  'data22',
  'data22',
  'data22',
]



export default function Home() {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '7'
  const total = data.length
  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const entries = data.slice(start, end)
  return (
    <>
      <div className='flex items-center flex-col'>
        <div className='flex flex-col items-center gap-2'>
          {entries.map((e) => {
            return (
              <div>
                {e}
              </div>
            )
          })}
        </div>
        <div className='top-1/3 absolute flex items-center'>
          <PaginationControls hasNextPage={end < data.length} hasPrevPage={start > 0} total={total} />
        </div>
        <div className="overflow-hidden flex flex-row gap-0 w-1/2 relative top-24 text-black bg-white">
          <ul className="flex animate-scroll bg-blue-50">
            <li className="w-32 h-12 rounded-lg shadow-md">
              <div>Hello</div>
            </li>
            <li className="w-32 h-12 rounded-lg shadow-md">
              <div>Hello</div>
            </li>
            <li className="w-32 h-12 rounded-lg shadow-md">
              <div>Hello</div>
            </li> 
            <li className="w-32 h-12 rounded-lg shadow-md">
              <div>Hello</div>
            </li>
            <li className="w-32 h-12 rounded-lg shadow-md">
              <div>Hello</div>
            </li>
          </ul>
          
        </div>
      </div>
      



    </>


  )
}
