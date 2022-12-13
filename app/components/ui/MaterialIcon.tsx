import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icons.types'

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconsComponent = MaterialIcons[name]
	return <IconsComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
