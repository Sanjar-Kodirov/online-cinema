import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

// create a useAuthRedirect hook in next js
export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { query, push } = useRouter()

	console.log(query)

	const redirect = String(query.redirect) || '/'

	useEffect(() => {
		if (user) {
			push(redirect)
		}
	}, [user, redirect, push])
}
