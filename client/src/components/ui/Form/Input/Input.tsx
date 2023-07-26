import clsx from 'clsx'
import { HTMLProps, LegacyRef, forwardRef } from 'react'

export type FormInputProps = HTMLProps<HTMLInputElement> & {
  isValid?: boolean
}

const FormInput = (
  { isValid = true, ...props }: FormInputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <input
      ref={ref}
      className={clsx(
        'text-sm rounded-lg block w-full p-2.5 shadow-sm border bg-gray-50 focus:text-gray-900',
        {
          'border-red-500 text-red-900 placeholder-red-700': !isValid,
          'border-gray-300 text-gray-900': isValid,
        }
      )}
      {...props}
    />
  )
}

export default forwardRef(FormInput)
