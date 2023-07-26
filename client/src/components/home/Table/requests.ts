import { User } from '~/types/user'

export const fetchUsers = async () => {
  try {
    const res = await fetch('http://localhost:3333/users')
    const data: User[] = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const deleteUser = async (user: User) => {
  try {
    const res = await fetch(`http://localhost:3333/users/${user.id}`, {
      method: 'DELETE',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
    const isDeleted: boolean = await res.json()
    return isDeleted
  } catch (error) {
    console.error(error)
  }
}
