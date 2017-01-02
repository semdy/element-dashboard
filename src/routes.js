import Vue from 'vue';
import Abstract from './pages/common/abstract';
import NotFound from './pages/common/404';

// list with filters page
import ListWithFilters from './pages/list/with-filters';
import BigForm from './pages/form/big-form';
import Login from './pages/login/login';

const root = Vue.component('root', {
  template: '<router-view></router-view>'
});

let routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    component: root,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'list',
        component: Abstract,
        name: '列表',
        iconClass: 'el-icon-message',
        children: [
          {
            path: 'filters',
            name: '搜索条件',
            component: ListWithFilters,
            imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg'
          }
        ]
      },
      {
        path: 'form',
        component: Abstract,
        name: '表单',
        iconClass: 'el-icon-document',
        children: [
          {
            path: 'big-form',
            name: '云服务器订购',
            component: BigForm,
            imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg'
          }
        ]
      },
      {
        path: 'nav-3',
        name: 'nav-3',
        component: ListWithFilters,
        iconClass: 'el-icon-menu'
      },
      {
        path: '',
        redirect: {name: '搜索条件'}
      }
    ]
  },
  {
    path: '*',
    redirect: {path: '/404'}
  }
];
let menuCount = routes.length;
routes[menuCount - 2].children.forEach(route => {
  if (route.children) {
    if (!route.meta) route.meta = {};
    route.meta.children = route.children;
  }
});

export default routes;
