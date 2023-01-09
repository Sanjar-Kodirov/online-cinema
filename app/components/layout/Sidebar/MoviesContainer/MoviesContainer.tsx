import { FC } from 'react'

import FavoriteMovies from './FavoriteMovies/FavoriteMovies'
import PopularMovies from './PopularMovies'

const MoviesContainer: FC = () => {
	return (
		<div>
			{/* <FavoriteMovies /> */}
			<PopularMovies />
		</div>
	)
}

export default MoviesContainer
