import { HomeTable } from '~/components/home/Table'

export default function Home() {
  return (
    <main className='min-h-screen p-24'>
      <section>
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Users</h1>

        <HomeTable />

        {/* TODO: add pagination */}
      </section>
    </main>
  )
}
