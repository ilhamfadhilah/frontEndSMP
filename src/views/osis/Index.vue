<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-user-cog" aria-hidden="true"></i> OSIS SMPN 1 Salopa </h1>
                <p class="bd-lead">Anggota OSIS SMPN 1 Salopa 2020/2021</p>
            </div>
        </header>

        <!-- breadcrumb -->
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-decoration-none"><i class="fa fa-home"></i> Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'osis' }" class="text-decoration-none"><i class="fa fa-user-cog"></i> OSIS SMPN 1 Salopa</router-link></li>
        </ol>
        </nav>
        <!-- end breadcrumb -->

        <div class="container-fluid mt-5 mb-5 ">

            <div class="row ">
                <div class="card">
                    <div class="card-body text-center animate__animated animate__fadeInLeft animate__slow ">
                        <img src="assets/img/repair.JPG" class="img-fluid" alt="Responsive image" >
                    </div>
                </div>
            </div>
        </div>
        <!-- main content -->

        <!-- footer -->
        <Footer />
        <!-- end footer -->
    </div>
</template>

<script>
    //import content loader
    import {
        // ContentLoader
    } from 'vue-content-loader'

    //import axios
    // import axios from 'axios'

    //import component
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"

    export default {
        name: 'OsisIndex',
        components: {
            // //loader component
            // ContentLoader,
            // component app
            Header,
            Footer
        },
        data() {
            return {
                // //define properties
                // workers: [],
                // //define content loader data
                // workers_loader: 6,
                // //pagination
                // moreExists: false,
                // nextPage: 0
            }
        },
        mounted() {
            // this.getWorkers()
        },
        methods: {
            // getWorkers() {
            //     axios.get('/api/worker').then(response => {
            //         this.workers = response.data.data.data
            //         if (response.data.data.current_page < response.data.data.last_page) {
            //             this.moreExists = true
            //             this.nextPage = response.data.data.current_page + 1
            //         } else {
            //             this.moreExists = false
            //         }
            //     }).catch(response => {
            //         console.log(response)
            //     })
            // },
            // //load more function
            // loadMore() {
            //     axios.get('/api/worker?page='+this.nextPage).then(response => {
            //       if (response.data.data.current_page < response.data.data.last_page) {
            //             this.moreExists = true
            //             this.nextPage = response.data.data.current_page + 1
            //         } else {
            //             this.moreExists = false
            //         }
            //         response.data.data.data.forEach(data => {
            //             this.workers.push(data)
            //         })
            //     }).catch(response => {
            //         console.log(response)
            //     })
            // }
        }
    }
</script>