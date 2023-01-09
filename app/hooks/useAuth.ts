import { useTypedSelector } from './useTypesSelector'

export const useAuth = () => {
	return useTypedSelector((state) => state.user)
}
// export const useAuth = () => ({
// 	user: null,
// 	isLoading: false,
// })
