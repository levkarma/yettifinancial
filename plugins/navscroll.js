import Vue from 'vue'
import NavScroll from 'navscroll';
NavScroll.setDefaults({
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 50,
})
Vue.use(NavScroll);