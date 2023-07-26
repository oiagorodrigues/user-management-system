import { object, string } from 'yup'

const phoneRegex = new RegExp(
  /^(?:\(?[1-9][1-9]\)?\s?)?(?:9[1-9][0-9]{3})\-?(?:[0-9]{4})$/
)

export const UserValidationSchema = object({
  name: string().min(1).required(),
  email: string().email().required(),
  phone: string().matches(phoneRegex).required(),
  image: string().required(),
})
