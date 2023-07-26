import clsx from 'clsx'
import { TableCellProps } from './types'

const TableCell = ({ children, className }: TableCellProps) => {
  return <td className={clsx('px-6 py-2', className)}>{children}</td>
}

export default TableCell
