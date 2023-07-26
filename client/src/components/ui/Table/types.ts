import { HTMLAttributes, PropsWithChildren, TdHTMLAttributes } from 'react'

export interface TableHeader {
  field: string
  label: string
}

export type TableRowProps = PropsWithChildren<{
  index?: number
}>

export type TableCellProps = PropsWithChildren<{
  className?: string
}>
