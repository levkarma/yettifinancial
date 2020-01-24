import data from '~/assets/data/cleaned.json'
export const vmgNuxtTemplatesMainLayout = {
	created() {
		return this.$store.commit('data', data)
	}
}