import { PropsWithChildren } from 'react'

const TableHeader = ({ children }: PropsWithChildren) => {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded'>
      <tr>{children}</tr>
    </thead>
  )
}

export default TableHeader
