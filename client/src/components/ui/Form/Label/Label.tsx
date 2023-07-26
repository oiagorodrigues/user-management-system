import { HTMLProps, PropsWithChildren } from 'react'

const FormLabel = ({
  children,
  ...props
}: PropsWithChildren<HTMLProps<HTMLLabelElement>>) => {
  return (
    <label className='block mb-2 text-sm font-medium text-gray-900' {...props}>
      {children}
    </label>
  )
}

export default FormLabel
