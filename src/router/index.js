import Vue from 'vue'
import Router from 'vue-router'
import shareIndex from '@/components/shareIndex.vue'
import experience from '@/components/xd/xdMain.vue'
import experienceDetail from '@/components/xd/xdDetail.vue'
import addArticle from '@/components/addArticle/addArticle.vue'
import dh from '@/components/dh/dh.vue'
import adddh from '@/components/dh/adddh.vue'
import anli from '@/components/anli/anli.vue'
import $ from 'jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shareIndex',
      component: shareIndex,
      beforeEnter: (to, from, next) => {
        $('#app').css('background-image','url("/static/images/index_bg.jpg")');
        next();
      }
    },
    {
    	path: '/experience',
    	name: 'experience',
    	component: experience
    },
    {
      path: '/experienceDetail',
      name: 'experienceDetail',
      component: experienceDetail
    },
    {
      path: '/addArticle',
      name: 'addArticle',
      component: addArticle
    },
    {
      path: '/dh',
      name: 'dh',
      component: dh
    },
    {
      path: '/adddh',
      name: 'adddh',
      component: adddh
    },
    {
      path: '/anli',
      name: 'anli',
      component: anli
    },
    { 
      path: '*', redirect: '/' 
    }
  ]
})
