import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMenuStore = defineStore('menuitems', {
	state: () => ({ items: [] }),
	getters: {
		getCustomMenuItems: (state) => state.items,
	},
	actions: {
		async initCustomMenuItems() {
			if (this.items.length === 0) {
				await fetch('/content/custommenuitems')
					.then((res) => res.json())
					.then((d) => {
						this.items = d
					})
				// Add properties for Primevue navigation
				for (let i in this.items) {
					this.items[i].label = this.items[i].content_name
					this.items[i].to = `/page/${this.items[i].content_id}`

					this.items[i].visible = '() => !auth.isLoggedIn'
				}
			}
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useMenuStore, import.meta.hot))
}
