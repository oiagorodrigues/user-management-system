import { User } from '~/types/user'

export const postUsers = async (user: User) => {
  try {
    await fetch('http://localhost:3333/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
  }
}

export const updateUser = async (user: User) => {
  try {
    await fetch(`http://localhost:3333/users/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async (userId: string) => {
  try {
    const res = await fetch(`http://localhost:3333/users/${userId}`)
    const data: User = await res.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
