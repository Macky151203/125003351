'use client'
import React, { useEffect, useState } from 'react'
import PaginationControls from './components/paginate'
import { useSearchParams } from 'next/navigation'



export default function Home() {
  const [data,setdata]=useState([])
  useEffect(()=>{
    const getall=async()=>{
      const res=await fetch('/api/products')
      const alldata=await res.json()
      console.log(alldata.products.allproducts)
      setdata(alldata.products.allproducts)
      // console.log(data)
    }
    getall()
  },[])
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '10'
  const total = data.length
  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)
  const entries = data.slice(start, end)
  return (
    <>
      <div className='flex items-center flex-col'>
        <div className='flex flex-col items-center gap-2'>
          {entries.map((e,i) => {
            return (
              <div key={i}>
                {e.productName}-{e.rating}
              </div>
            )
          })}
        </div>
        <div className='top-1/3 absolute flex items-center'>
          <PaginationControls hasNextPage={end < data.length} hasPrevPage={start > 0} total={total} />
        </div>
      </div>
      



    </>


  )
}
