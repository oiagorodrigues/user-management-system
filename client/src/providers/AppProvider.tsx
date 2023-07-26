import { ReactNode } from 'react'

import { ReduxProvider } from '~/store/provider'
import ReactQueryProvider from './ReactQueryProvider'

const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ReduxProvider>
  )
}

export default AppProvider
