import Image from 'next/image'
import { AvatarProps } from './types'

const Avatar = ({ alt, src, size = 50 }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full shadow-md p-1 ring-1 ring-gray-200 overflow-hidden w-${size} h-${size}`}
      style={{ height: size }}
    />
  )
}

export default Avatar
