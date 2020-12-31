<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 footer-info">
            <h3>NewBiz</h3>
            <p>
              {{ $store.getters.cData('about-us-section.first-sentence') }}
              {{ $store.getters.cData('about-us-section.body') }}
            </p>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              {{ $store.getters.cData('locations.first-line-address') }} <br />
              {{ $store.getters.cData('locations.city') }},
              {{ $store.getters.cData('locations.state') }}
              {{ $store.getters.cData('locations.zip') }}<br />
              United States <br />
              <strong>Phone:</strong
              >{{ $store.getters.cData('locations.phone-number') }}<br />
              <strong>Email:</strong>
              {{ $store.getters.cData('locations.email') }}<br />
            </p>

            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a
                :href="
                  $store.getters.cData('social-media-links.facebook-page-url')
                "
                class="facebook"
                ><i class="fa fa-facebook"></i
              ></a>
              <!-- <a :href="'https://instagram.com/' + $store.getters.cData('social-media-links.instagram-handle').slice(0,-1)" class="instagram"><i class="fa fa-instagram"></i></a> -->
              <a href="#" class="google-plus"
                ><i class="fa fa-google-plus"></i
              ></a>
              <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna veniam enim veniam illum dolore legam minim quorum culpa
              amet magna export quem marada parida nodela caramase seza.
            </p>
            <form action="" method="post">
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!--
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
        -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer>
  <!-- #footer -->
</template>

<script>
export default {
  name: 'AppFooter',

  data() {
    return {}
  }
}
</script>

<style lang="css" scoped></style>
