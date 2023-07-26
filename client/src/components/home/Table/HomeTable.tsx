'use client'

import { useQuery } from '@tanstack/react-query'
import { FaPencil, FaTrashCan } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

import { Avatar } from '~/components/ui/Avatar'
import { Table } from '~/components/ui/Table'
import { AppState, useAppDispatch } from '~/store'
import { setUsers } from '~/store/features/users-slice'
import { User } from '~/types/user'
import { fetchUsers } from './requests'
import { headers } from './constants'

const HomeTable = () => {
  const users = useSelector((state: AppState) => state.users.users)
  const dispatch = useAppDispatch()

  useQuery({
    queryKey: ['fetchUsers'],
    queryFn: fetchUsers,
    onSuccess: (users: User[]) => {
      dispatch(setUsers(users))
    },
  })

  return (
    <Table.Root>
      <Table.Header>
        {headers.map((header) => (
          <Table.Head key={header.field}>{header.label}</Table.Head>
        ))}
      </Table.Header>
      <Table.Body>
        {users.length ? (
          users.map((row, rowIndex) => (
            <Table.Row key={rowIndex} index={rowIndex}>
              {headers.map((header, colIndex) => {
                if (header.field === 'action') {
                  return (
                    <Table.Cell key={`row_${rowIndex}_col_${colIndex}`}>
                      <button
                        className='text-sky-400 border border-sky-400 hover:bg-sky-500 hover:text-white rounded-lg text-sm p-2.5 text-center mr-2'
                        type='button'
                      >
                        <FaPencil />
                        <span className='sr-only'>Edit user</span>
                      </button>
                      <button
                        className='text-red-400 border border-red-400 hover:bg-red-500 hover:text-white rounded-lg text-sm p-2.5 text-center'
                        type='button'
                      >
                        <FaTrashCan />
                        <span className='sr-only'>Delete user</span>
                      </button>
                    </Table.Cell>
                  )
                }

                if (header.field === 'image') {
                  return (
                    <Table.Cell key={`row_${rowIndex}_col_${colIndex}`}>
                      <div className='flex justify-center items-center'>
                        <Avatar src={row.image} alt="User's avatar" />
                      </div>
                    </Table.Cell>
                  )
                }

                return (
                  <Table.Cell key={`row_${rowIndex}_col_${colIndex}`}>
                    {row[header.field as keyof User]}
                  </Table.Cell>
                )
              })}
            </Table.Row>
          ))
        ) : (
          <tr>
            <td colSpan={5} className='text-lg text-gray-600 p-6 text-center'>
              No users registered
            </td>
          </tr>
        )}
      </Table.Body>
    </Table.Root>
  )
}

export default HomeTable
