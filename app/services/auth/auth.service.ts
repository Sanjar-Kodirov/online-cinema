import Cookies from 'js-cookie'

import { API_URL, getAuthUrl } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'

import { removeTokensStorage, saveToLocalStorage } from './auth.helper'
import { getContentType } from '@/api/api.helpers'
import axios from '@/api/interceptors'
import { axiosClassic } from '@/api/interceptors'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			{
				email,
				password,
			}
		)
		if (response.data.accessToken) {
			saveToLocalStorage(response.data)
		}

		return response
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/login'),
			{
				email,
				password,
			}
		)
		if (response.data.accessToken) {
			saveToLocalStorage(response.data)
		}

		return response
	},

	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login/access-token')}`,
			{
				refreshToken,
			},
			{
				headers: getContentType(),
			}
		)
		
		if (response.data.accessToken) {
			saveToLocalStorage(response.data)
		}

		return response
	},
}
