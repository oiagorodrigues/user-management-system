import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import { HomeTable } from '~/components/home/Table'

export default function Home() {
  return (
    <section>
      <div className='flex items-center justify-between mb-2'>
        <h1 className='text-2xl font-bold text-gray-800'>Users</h1>

        <Link
          className='text-white border border:bg-green-800 bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center justify-center gap-1'
          href='/users/create'
        >
          <FaPlus />
          Add user
        </Link>
      </div>

      <HomeTable />

      {/* TODO: add pagination */}
    </section>
  )
}
