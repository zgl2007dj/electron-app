export default [
  {
    path: '/',
    // name: 'landing-page',
    component: require('pages/home')
  },
  {
    path: '/baoxiao',
    component: require('pages/workspace/baoxiao')
  },
  {
    path: '/404',
    component: require('pages/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
