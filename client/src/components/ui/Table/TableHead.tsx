import { PropsWithChildren } from 'react'

const TableHead = ({ children }: PropsWithChildren) => {
  return (
    <th scope='col' className='px-6 py-6'>
      {children}
    </th>
  )
}

export default TableHead
