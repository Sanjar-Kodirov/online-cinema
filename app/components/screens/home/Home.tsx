import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movie online"
				className="text-gray-300 mb-8 text-xl"
			/>
			<button onClick={() => toastr.success('Auth', 'You have successfully!')}>
				Show message
			</button>
		</Meta>
	)
}

export default Home
