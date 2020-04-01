import Vue from 'vue'
import vueRouter from 'vue-router'
import Blog from './components/Blog.vue'
import Table from './components/Table.vue'
Vue.use(vueRouter)

export default new vueRouter({
    routes:[
        {
            path:'/',
            component: Blog
        },
        {
            path:'/table',
            name: 'table',
            component: Table
        }
    ],
    // mode: 'history' // 去掉url中的#号
})
