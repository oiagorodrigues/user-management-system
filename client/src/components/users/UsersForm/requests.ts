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
