import { ImageProps } from 'next/image'

export interface AvatarProps extends Pick<ImageProps, 'src' | 'alt'> {
  size?: ImageProps['width'] | ImageProps['height']
}
