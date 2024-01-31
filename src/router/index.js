import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyContacts from '../views/MyContacts.vue'
import DriversView from '../views/DriversView.vue'
import BussesView from '../views/BussesView.vue'
import BusEdit from '../views/BusEdit.vue'
import DriverEdit from '../views/DriverEdit.vue'
import AssignmentsView from '@/views/AssignmentsView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: MyContacts,
    },
    {
        path: '/drivers',
        name: 'drivers',
        component: DriversView,
    },
    {
        path: '/drivers/config/:id?',
        name: 'drivers-config',
        component: DriverEdit,
    },
    {
        path: '/busses',
        name: 'busses',
        component: BussesView,
    },
    {
        path: '/busses/config/:id?',
        name: 'busses-config',
        component: BusEdit,
    },
    {
        path: '/assignments',
        name: 'assignments',
        component: AssignmentsView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes,
})

export default router
