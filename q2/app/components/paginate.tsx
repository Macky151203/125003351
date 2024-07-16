'use client'
import React from 'react'
import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  total: Number
}
const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    total,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  // console.log('this is urlsearchparams')
  // console.log(params)
  // console.log('this is searchparamsrwaw')
  // console.log(searchParams)

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '10'

  return (
    <div className='flex gap-2'>
      <button
        className={`bg-blue-500 rounded-md text-white p-1 ${!hasPrevPage ? 'cursor-not-allowed' : ''}`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        🎯prev page
      </button>

      <div>
        {page} / {Math.ceil(Number(total) / Number(per_page))}
      </div>

      <button
        className={`bg-blue-500 rounded-md text-white p-1 ${!hasNextPage ? 'cursor-not-allowed' : ''}`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        next page🎯
      </button>
    </div>
  )
}

export default PaginationControls