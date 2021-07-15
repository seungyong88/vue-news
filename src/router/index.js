/* eslint-disable no-unused-vars */
import Vue from 'vue';
import VueRouter from 'vue-router';
import ListView_Mix from "../views/ListView_Mix.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      name: 'home',
      redirect: '/news',
    },
    {
      // path : url 주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      // component: createListView('NewsView'),
      component: ListView_Mix,
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: createListView('JobsView'),
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: createListView('AskView'),
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemView,
    }
  ]
})