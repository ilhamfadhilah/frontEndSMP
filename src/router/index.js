// import vue
import Vue from 'vue'

//import vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import axios
import axios from 'axios'
//default base URL / EndPoint API
axios.defaults.baseURL = "https://smpn1salopa.sch.id"

const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'home',
            component: () =>
                import( /* webpackChunkName: "Home" */ "@/views/home/Index"),
        },
        {
            path: '/post',
            name: 'post',
            component: () =>
                import( /* webpackChunkName: "PostIndex" */ "@/views/post/Index"),
        },
        {
            path: '/tag/:slug',
            name: 'detail_tag',
            component: () =>
                import( /* webpackChunkName: "TagShow" */ "@/views/tag/Show")
        },
        {
            path: '/category/:slug',
            name: 'detail_category',
            component: () =>
                import( /* webpackChunkName: "CategoryShow" */ "@/views/category/Show")
        },
        {
            path: '/event',
            name: 'event',
            component: () =>
                import( /* webpackChunkName: "EventIndex" */ "@/views/event/Index")
        },
        {
            path: '/event/:slug',
            name: 'detail_event',
            component: () =>
                import( /* webpackChunkName: "EventShow" */ "@/views/event/Show")
        },
        {
            path: '/photo',
            name: 'photo',
            component: () =>
                import( /* webpackChunkName: "PhotoIndex" */ "@/views/photo/Index")
        },
        {
            path: '/video',
            name: 'video',
            component: () =>
                import( /* webpackChunkName: "VideoIndex" */ "@/views/video/Index")
        },
        {
            path: '/contact',
            name: 'contact',
            component: () =>
                import( /* webpackChunkName: "ContactIndex" */ "@/views/contact/Index")
        },
        {
            path: '/:slug',
            name: 'detail_post',
            component: () =>
                import( /* webpackChunkName: "PostShow" */ "@/views/post/Show")
        },
        {
            path: '/worker',
            name: 'worker',
            component: () =>
                import( /* webpackChunkName: "WorkerIndex" */ "@/views/worker/Index")
        },
        {
            path: '/osis',
            name: 'osis',
            component: () =>
                import( /* webpackChunkName: "OsisIndex" */ "@/views/osis/Index")
        },
        {
            path: '/alumni',
            name: 'alumni',
            component: () =>
                import( /* webpackChunkName: "AlumniIndex" */ "@/views/alumni/Index")
        },
            
        {
            path: '/extrakulikuler',
            name: 'extrakulikuler',
            component: () =>
                import( /* webpackChunkName: "ExtrakulikulerIndex" */ "@/views/extrakulikuler/Index")
        },
        {
            path: '/ppdb',
            name: 'ppdb',
            component: () =>
                import( /* webpackChunkName: "PPDBIndex" */ "@/views/ppdb/Index")
        },
        {
            path: '/view',
            name: 'view',
            component: () =>
                import( /* webpackChunkName: "ViewIndex" */ "@/views/view/Index")
        },
        {
            path: '/daftar',
            name: 'daftar',
            component: () =>
                import( /* webpackChunkName: "DaftarIndex" */ "@/views/daftar/Index")
        },
      
      
    ],
    mode: 'history'
})

export default router