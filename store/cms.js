export const state = () => ({
  events: []
})

export const mutations = {
  setEventsPosts(state, list) {
    state.eventsPosts = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    let blogPosts = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  }
}
