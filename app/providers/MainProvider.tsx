import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

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
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default MainProvider
