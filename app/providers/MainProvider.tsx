import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '@/components/layout/Layout'

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
		<QueryClientProvider client={queryClient}>
			{' '}
			<Layout> {children} </Layout>
		</QueryClientProvider>
	)
}

export default MainProvider
