import { UsersForm } from '~/components/users/UsersForm'

export default function EditUser() {
  return (
    <section>
      <div className='flex items-center justify-between'>
        {/* TODO: add a back button */}
        <h1 className='text-2xl font-bold text-gray-800 mb-4'>Edit user</h1>
      </div>

      <UsersForm />
    </section>
  )
}
