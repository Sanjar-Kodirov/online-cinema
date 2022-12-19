import axios from 'axios'
import { getGenresUrl } from 'config/api.config'

import { IGenre } from '@/shared/types/movie.types'

import { axiosClassic } from '@/api/interceptors'

export const GenreService = {
	// get popular genres
	// async getPopularGenres(limit = 4) {
	// 	return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'))
	// },

	async getAll(searchTerm?: string) { 
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
