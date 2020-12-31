<template>
  <div class="container">
    <div class="row">
      <div class="box">
        <ul class="">
          <li class="box" v-for="(val, key) in option.getFilterData" :key="key">
            <div @click="filter(key)">{{ key }}</div>
          </li>
        </ul>
      </div>
      <div class="col-md-8 d-flex">
        <div class="m-auto w-100">
          <client-only>
            <isotope ref="projects" :options="option" :list="projects">
              <div class="" v-for="(item, index) in projects" :key="index">
                <div>{{ item.title }}</div>
              </div>
            </isotope>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IsotopeTest',
  data() {
    return {
      filterOption: 'Show All',
      option: {
        getFilterData: {
          'Show All'() {
            return true
          },
          Dog(itemEl) {
            return itemEl.title === 'Dog'
          },
          Cat(itemEl) {
            return itemEl.title === 'Cat'
          }
        }
      },

      projects: [
        {
          title: 'Dog'
        },
        {
          title: 'Dog'
        },
        {
          title: 'Cat'
        }
      ]
    }
  },
  methods: {
    filter(key) {
      if (this.filterOption !== key) {
        this.$refs.projects.filter(key)
        this.filterOption = key
      }
    }
  }
}
</script>

<style lang="css" scoped>
.thumbnail {
  color: black;
}
.container {
  background-color: grey;
}
.box {
  border: 2px black;
}
</style>
