'use client'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Form } from '~/components/ui/Form'
import { User } from '~/types/user'
import { UserValidationSchema } from './validations'
import { useAppDispatch } from '~/store'
import { setUsers } from '~/store/features/users-slice'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postUsers } from './requests'

const UsersForm = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const createUserMutation = useMutation({
    mutationFn: (user: User) => postUsers(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetchUsers'] })
      router.push('/')
    },
  })

  const {
    control,
    handleSubmit,
    formState: { isValid: isFormValid },
  } = useForm<User>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      image: '',
    },
    resolver: yupResolver(UserValidationSchema),
    mode: 'onSubmit',
    shouldFocusError: true,
  })

  function submitHandler(user: User) {
    createUserMutation.mutate(user)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className='grid gap-4 md:grid-cols-2'>
        <div>
          <Form.Label htmlFor='name'>Name</Form.Label>

          <Controller
            name='name'
            control={control}
            render={({ field, formState: { isValid, errors } }) => (
              <Form.Input
                id='name'
                isValid={errors?.name && isValid}
                {...field}
              />
            )}
          />
        </div>

        <div>
          <Form.Label htmlFor='email'>E-mail</Form.Label>
          <Controller
            name='email'
            control={control}
            render={({ field, formState: { isValid, errors } }) => (
              <Form.Input
                id='email'
                isValid={errors?.email && isValid}
                {...field}
              />
            )}
          />
        </div>

        <div>
          <Form.Label htmlFor='phone'>Phone</Form.Label>
          <Controller
            name='phone'
            control={control}
            render={({ field, formState: { isValid, errors } }) => (
              <Form.Input
                id='phone'
                isValid={errors?.phone && isValid}
                {...field}
              />
            )}
          />
        </div>

        <div>
          <Form.Label htmlFor='image'>Image</Form.Label>
          <Controller
            name='image'
            control={control}
            render={({ field, formState: { isValid, errors } }) => (
              <Form.Input
                id='image'
                isValid={errors?.image && isValid}
                {...field}
              />
            )}
          />
        </div>
      </div>

      <div className='flex items-center justify-end gap-4 mt-4'>
        <button
          className='bg-transparent text-gray-500 hover:text-gray-700 font-medium text-sm py-2 px-5 text-center'
          type='button'
        >
          Cancel
        </button>
        <button
          className='border border:bg-green-800 text-white font-medium bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-5 text-center shadow-sm disabled:bg-gray-200 disabled:border:bg-gray-200 disabled:text-gray-600 disabled:hover:bg-gray-200'
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default UsersForm
