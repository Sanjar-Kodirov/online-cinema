import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import Layout from '@/components/layout/Layout'

import { store } from '@/store/store'

import HeadProvider from './HeadProvider/HeadProvider'
import ReduxToastr from './ReduxToast'

interface Props {
	children: React.ReactNode
}
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})
const MainProvider: FC<Props> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					{' '}
					<ReduxToastr />
					<Layout> {children} </Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>  
	)
}

export default MainProvider
