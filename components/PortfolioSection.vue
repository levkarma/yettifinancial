<template>
  <section id="portfolio" class="clearfix scroll-item">
    <div id="entry-1-target">
      test
    </div>
    <div class="container">
      <header class="section-header">
        <h3 class="section-title">Our Portfolio</h3>
      </header>
      <client-only>
        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li
                data-filter="*"
                class="filter-active"
                v-for="(val, key) in option.getFilterData"
                :key="key"
                @click="filter(key)"
              >
                {{ key }}
              </li>
            </ul>
          </div>
        </div>
        <isotope
          ref="portfolio"
          :options="option"
          :list="portfolioList"
          class="row portfolio-container"
          v-images-loaded:on.progress="layout"
        >
          <div
            v-for="(element, index) in portfolioList"
            :key="index"
            class="col-lg-4 col-md-6 portfolio-item filter-app"
            style=""
          >
            <div class="portfolio-wrap">
              <img :src="element.src" class="img-fluid" alt="" />
              <div class="portfolio-info">
                <h4>
                  <a href="#">{{ element.title }}</a>
                </h4>
                <p>{{ element.title }}</p>
                <div>
                  <a
                    :href="element.src"
                    data-lightbox="portfolio"
                    data-title="App 1"
                    class="link-preview"
                    title="Preview"
                    ><i class="ion ion-eye"></i
                  ></a>
                  <a href="#" class="link-details" title="More Details"
                    ><i class="ion ion-android-open"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </isotope>
      </client-only>

      <div class="row portfolio-container">
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/app1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">App 1</a></h4>
              <p>App</p>
              <div>
                <a
                  href="img/portfolio/app1.jpg"
                  data-lightbox="portfolio"
                  data-title="App 1"
                  class="link-preview"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-web"
          data-wow-delay="0.1s"
        >
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/web3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">Web 3</a></h4>
              <p>Web</p>
              <div>
                <a
                  href="img/portfolio/web3.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 3"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-app"
          data-wow-delay="0.2s"
        >
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/app2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">App 2</a></h4>
              <p>App</p>
              <div>
                <a
                  href="img/portfolio/app2.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 2"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/card2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">Card 2</a></h4>
              <p>Card</p>
              <div>
                <a
                  href="img/portfolio/card2.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 2"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-web"
          data-wow-delay="0.1s"
        >
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/web2.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">Web 2</a></h4>
              <p>Web</p>
              <div>
                <a
                  href="img/portfolio/web2.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 2"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-app"
          data-wow-delay="0.2s"
        >
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/app3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">App 3</a></h4>
              <p>App</p>
              <div>
                <a
                  href="img/portfolio/app3.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="App 3"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/card1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">Card 1</a></h4>
              <p>Card</p>
              <div>
                <a
                  href="img/portfolio/card1.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 1"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-card"
          data-wow-delay="0.1s"
        >
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/card3.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">Card 3</a></h4>
              <p>Card</p>
              <div>
                <a
                  href="img/portfolio/card3.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="Card 3"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-lg-4 col-md-6 portfolio-item filter-web"
          data-wow-delay="0.2s"
        >
          <div class="portfolio-wrap">
            <img
              src="~/assets/img/portfolio/web1.jpg"
              class="img-fluid"
              alt=""
            />
            <div class="portfolio-info">
              <h4><a href="#">Web 1</a></h4>
              <p>Web</p>
              <div>
                <a
                  href="img/portfolio/web1.jpg"
                  class="link-preview"
                  data-lightbox="portfolio"
                  data-title="Web 1"
                  title="Preview"
                  ><i class="ion ion-eye"></i
                ></a>
                <a href="#" class="link-details" title="More Details"
                  ><i class="ion ion-android-open"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'PortfolioSection',
  data() {
    return {
      filterOption: 'All',
      initLayout: false,
      portfolioList: [
        {
          title: 'App 1',
          src: '/img/portfolio/app1.jpg',
          type: 'app'
        },
        {
          title: 'Web 3',
          src: '/img/portfolio/web3.jpg',
          type: 'web'
        },
        {
          title: 'App 2',
          src: '/img/portfolio/app2.jpg',
          type: 'app'
        },
        {
          title: 'Card 2',
          src: '/img/portfolio/card2.jpg',
          type: 'card'
        },
        {
          title: 'Web 2',
          src: '/img/portfolio/web2.jpg',
          type: 'web'
        },
        {
          title: 'App 3',
          src: '/img/portfolio/app3.jpg',
          type: 'app'
        },
        {
          title: 'Card 1',
          src: '/img/portfolio/card1.jpg',
          type: 'card'
        },
        {
          title: 'Card 3',
          src: '/img/portfolio/card3.jpg',
          type: 'card'
        },
        {
          title: 'Web 1',
          src: '/img/portfolio/web1.jpg',
          type: 'web'
        }
      ],
      option: {
        getFilterData: {
          All() {
            return true
          },
          App(itemEl) {
            return itemEl.type === 'app'
          },
          Web(itemEl) {
            return itemEl.type === 'web'
          },
          Card(itemEl) {
            return itemEl.type === 'card'
          }
        }
      }
    }
  },
  methods: {
    filter(key) {
      if (this.filterOption !== key) {
        this.$refs.portfolio.filter(key)
        this.filterOption = key
      }
    },
    layout() {
      this.$refs.portfolio.layout('masonry')
    }
  }
}
</script>
<style></style>
