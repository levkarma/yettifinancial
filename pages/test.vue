<template>
  <div id="home">
    <AppHeader></AppHeader>
    <IntroSection></IntroSection>
    <main id="main">
      <!--==========================
          About Us Section
        ============================-->
      <section id="about">
        <div class="container">
          <header class="section-header">
            <h3>About Us</h3>
            <p>
              {{ $store.getters.cData('about-us-section.first-sentence') }}
            </p>
          </header>

          <div class="row about-container">
            <div class="col-lg-6 content order-lg-1 order-2">
              <p>{{ $store.getters.cData('about-us-section.body') }} NULL</p>

              <div class="icon-box wow fadeInUp">
                <div class="icon"><i class="fa fa-shopping-bag"></i></div>
                <h4 class="title"><a href="">Eiusmod Tempor</a></h4>
                <p class="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>

              <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                <div class="icon"><i class="fa fa-photo"></i></div>
                <h4 class="title"><a href="">Magni Dolores</a></h4>
                <p class="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>

              <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                <div class="icon"><i class="fa fa-bar-chart"></i></div>
                <h4 class="title"><a href="">Dolor Sitema</a></h4>
                <p class="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>

            <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
              <img src="~/assets/img/about-img.svg" class="img-fluid" alt="" />
            </div>
          </div>

          <div class="row about-extra">
            <div class="col-lg-6 wow fadeInUp">
              <img
                src="~/assets/img/about-extra-1.svg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h4>
              <p>
                Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                Deleniti quod porro sed quisquam saepe. Numquam mollitia
                recusandae non ad at et a.
              </p>
              <p>
                Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                Odit qui asperiores ea corporis deserunt veritatis quidem
                expedita perferendis. Qui rerum eligendi ex doloribus quia sit.
                Porro rerum eum eum.
              </p>
            </div>
          </div>

          <div class="row about-extra">
            <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
              <img
                src="~/assets/img/about-extra-2.svg"
                class="img-fluid"
                alt=""
              />
            </div>

            <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
              <h4>
                Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                tempora facere reprehenderit.
              </h4>
              <p>
                Delectus alias ut incidunt delectus nam placeat in consequatur.
                Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio.
                Cumque fugit earum est quam officiis numquam. Ducimus corporis
                autem at blanditiis beatae incidunt sunt.
              </p>
              <p>
                Voluptas saepe natus quidem blanditiis. Non sunt impedit
                voluptas mollitia beatae. Qui esse molestias. Laudantium libero
                nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
              </p>
              <p>
                Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore
                sint quia modi. Numquam est aut fuga mollitia exercitationem nam
                accusantium provident quia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- #about -->

      <!--==========================
          Services Section
        ============================-->
      <section id="services" class="section-bg">
        <div class="container">
          <header class="section-header">
            <h3>Services</h3>
            <p>
              {{ $store.getters.cData('services.section-subtitle') }}
            </p>
          </header>

          <div class="row">
            <div
              class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp"
              data-wow-duration="1.4s"
              v-for="(service, index) of $store.getters.cData(
                'services.services'
              )"
            >
              <div class="box">
                <div class="icon">
                  <i
                    class="ion-ios-analytics-outline"
                    style="color: #ff689b;"
                  ></i>
                </div>
                <h4 class="title">
                  <a href="">{{ service }}</a>
                </h4>
                <p class="description">
                  {{
                    $store.getters.cData('services.services-explanation')[index]
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- #services -->

      <!--==========================
          Why Us Section
        ============================-->
      <section id="why-us" class="wow fadeIn">
        <div class="container">
          <header class="section-header">
            <h3>Why choose us?</h3>
            <p>
              {{ $store.getters.cData('why-choose-us.section-subtitle') }}
            </p>
          </header>

          <div class="row row-eq-height justify-content-center">
            <div
              class="col-lg-4 mb-4"
              v-for="reason of $store.getters.cData('why-choose-us.reasons')"
            >
              <div class="card wow bounceInUp">
                <i class="fa fa-diamond"></i>
                <div class="card-body">
                  <h5 class="card-title">{{ reason }}</h5>
                  <p class="card-text">
                    Deleniti optio et nisi dolorem debitis. Aliquam nobis est
                    temporibus sunt ab inventore officiis aut voluptatibus.
                  </p>
                  <a href="#" class="readmore">Read more </a>
                </div>
              </div>
            </div>
          </div>

          <div class="row counters">
            <div
              class="col-lg-3 col-6 text-center"
              v-for="number of $store.getters.cData(
                'why-choose-us.the-numbers'
              )"
            >
              <!-- <span>{{number.split(':')[1].trim()}}</span> -->
              <client-only>
                <number
                  :from="0"
                  :to="number.split(':')[1].trim()"
                  :duration="5"
                  :delay="2"
                  easing="Power1.easeOut"
                />
              </client-only>
              <p>{{ number.split(':')[0].trim() }}</p>
            </div>
          </div>
        </div>
      </section>

      <!--==========================
          Portfolio Section
        ============================-->
      <section id="portfolio" class="clearfix">
        <div class="container">
          <header class="section-header">
            <h3 class="section-title">Our Portfolio</h3>
          </header>

          <div class="row">
            <div class="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" class="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <client-only>
            <ul class="">
              <li class="box" v-for="(val, key) in option.getFilterData">
                <div @click="filter(key)">{{ key }}</div>
              </li>
            </ul>
          </client-only>

          <isotope
            ref="portfolio"
            :options="option"
            :list="portfolioList"
            class="row portfolio-container"
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
            <!--                   <div class="" v-for="(item, index) in portfolioList" :key="index">
                                <div>{{item.title}}</div>
                              </div> -->
          </isotope>

          <!--          <div class="row portfolio-container">
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
          </div> -->
        </div>
      </section>
      <!-- #portfolio -->

      <!--==========================
          Clients Section
        ============================-->
      <section id="testimonials" class="section-bg">
        <div class="container">
          <header class="section-header">
            <h3>Testimonials</h3>
          </header>

          <div class="row justify-content-center">
            <div class="col-lg-8">
              <client-only>
                <carousel
                  class="owl-carousel testimonials-carousel wow fadeInUp"
                  :perPage="1"
                  :autoplay="true"
                  :autoplayTimeout="4000"
                  :autoplayHoverPause="true"
                >
                  <slide
                    v-for="(testimonyGiver, index) of $store.getters.cData(
                      'testimonials.testimony-giver'
                    )"
                    :key="index"
                  >
                    <div class="testimonial-item">
                      <img
                        src="~/assets/img/testimonial-1.jpg"
                        class="testimonial-img"
                        alt=""
                      />
                      <h3>{{ testimonyGiver }}</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        {{
                          $store.getters.cData('testimonials.testimony')[index]
                        }}
                      </p>
                    </div>
                  </slide>
                </carousel>
              </client-only>
            </div>
          </div>
        </div>
      </section>
      <!-- #testimonials -->

      <!--==========================
          Team Section
        ============================-->
      <section id="team">
        <div class="container">
          <div class="section-header">
            <h3>Team</h3>
            <!--             <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p> -->
          </div>

          <div class="row">
            <div
              class="col-lg-3 col-md-6 wow fadeInUp"
              v-for="(teamMemberName, index) of $store.getters.cData(
                'team.team-member-name'
              )"
            >
              <div class="member">
                <img src="~/assets/img/team-1.jpg" class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>{{ teamMemberName }}</h4>
                    <span>{{
                      $store.getters.cData('team.team-member-position')[index]
                    }}</span>
                    <div class="social">
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-facebook"></i></a>
                      <a href=""><i class="fa fa-google-plus"></i></a>
                      <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- #team -->

      <!--==========================
          Clients Section
        ============================-->
      <section id="clients" class="section-bg">
        <div class="container">
          <div class="section-header">
            <h3>Our Clients</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque dere santome nida.
            </p>
          </div>

          <div class="row no-gutters clients-wrap clearfix wow fadeInUp">
            <div
              class="col-lg-3 col-md-4 col-xs-6"
              v-for="name of $store.getters.cData('clients.client-name')"
            >
              <div class="client-logo">
                <img
                  src="~/assets/img/clients/client-1.png"
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--==========================
          Contact Section
        ============================-->
      <section id="contact">
        <div class="container-fluid">
          <div class="section-header">
            <h3>Contact Us</h3>
          </div>

          <div class="row wow fadeInUp">
            <div class="col-lg-6">
              <div class="map mb-4 mb-lg-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  style="border:0; width: 100%; height: 312px;"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-5 info">
                  <i class="ion-ios-location-outline"></i>
                  <p>
                    {{ $store.getters.cData('locations.first-line-address') }}
                  </p>
                  <p>
                    {{ $store.getters.cData('locations.city') }},
                    {{ $store.getters.cData('locations.state') }},
                    {{ $store.getters.cData('locations.zip') }}
                  </p>
                </div>
                <div class="col-md-4 info">
                  <i class="ion-ios-email-outline"></i>
                  <p>{{ $store.getters.cData('locations.email') }}</p>
                </div>
                <div class="col-md-3 info">
                  <i class="ion-ios-telephone-outline"></i>
                  <p>+{{ $store.getters.cData('locations.phone-number') }}</p>
                </div>
              </div>

              <div class="form">
                <div id="sendmessage">
                  Your message has been sent. Thank you!
                </div>
                <div id="errormessage"></div>
                <form action="" method="post" role="form" class="contactForm">
                  <div class="form-row">
                    <div class="form-group col-lg-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div class="validation"></div>
                    </div>
                    <div class="form-group col-lg-6">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div class="validation"></div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div class="validation"></div>
                  </div>
                  <div class="text-center">
                    <button type="submit" title="Send Message">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- #contact -->
    </main>
    <AppFooter></AppFooter>

    <a href="#" v-scroll-to="'#header'" class="back-to-top"
      ><i class="fa fa-chevron-up"></i
    ></a>
    <!-- Uncomment below i you want to use a preloader -->
    <!-- <div id="preloader"></div> -->
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import IntroSection from '~/components/IntroSection.vue'
import AppFooter from '~/components/AppFooter.vue'
import IsotopeTest from '~/components/IsotopeTest.vue'

export default {
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
  components: {
    AppHeader,
    IntroSection,
    AppFooter,
    IsotopeTest
  },
  methods: {
    filter(key) {
      if (this.filterOption !== key) {
        this.$refs.portfolio.filter(key)
        this.filterOption = key
      }
    }
  },
  mounted() {
    console.log(this.$isotope)
  }
}
</script>

<style></style>