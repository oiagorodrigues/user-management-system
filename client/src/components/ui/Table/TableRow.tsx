import classes from 'clsx'
import { TableRowProps } from './types'

const TableRow = ({ index, children }: TableRowProps) => {
  return (
    <tr
      key={`row_${index}`}
      id={`row_${index}`}
      className={'bg-white border-b dark:bg-gray-800 dark:border-gray-700'}
    >
      {children}
    </tr>
  )
}

export default TableRow
