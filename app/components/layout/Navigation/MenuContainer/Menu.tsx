import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import AuthItems from './auth/AuthItems'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item, index) => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
			{title === 'Genres' ? <AuthItems /> : null}
		</div>
	)
}

export default Menu
