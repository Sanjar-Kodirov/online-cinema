export const getStoreLocal = (name: string) => {
	if (typeof localStorage !== 'undefined') {
		const ls = localStorage.getItem(name)
		if (ls) {
			return JSON.parse(ls)
		} else {
			return null
		}
	}
	return null
}
