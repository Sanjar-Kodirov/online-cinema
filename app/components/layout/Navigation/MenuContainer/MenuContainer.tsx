import { FC } from 'react'

import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* genres menu */}
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
