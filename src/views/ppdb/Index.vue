<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-graduation-cap" aria-hidden="true"></i> PPDB SMPN 1 Salopa </h1>
                <p class="bd-lead">Pendaftaran Peserta Didik Baru SMPN 1 Salopa Tahun Ajaran 2020/2021</p>
            </div>
        </header>

        <!-- breadcrumb -->
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-decoration-none"><i class="fa fa-home"></i> Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'ppdb' }" class="text-decoration-none"><i class="fa fa-image"></i> PPDB SMPN 1 Salopa</router-link></li>
        </ol>
        </nav>
        <!-- end breadcrumb -->

        <div class="container-fluid mt-5 mb-5">

             <div class="card w-screen mx-auto px-4 border-0">
                    <div class="card-body">

                        <div class="jumbotron jumbotron-billboard">
                            <div class="img"></div>
                            <div class="container text-dark text-center ">
                                <h3 class="display-4 text-dark font-weight-bold">PPDB di SMPN 1 Salopa</h3>
                                <h5 class="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos, dignissimos esse enim est optio commodi quibusdam vero perferendis sapiente distinctio quisquam delectus pariatur tempore et quasi voluptatem, earum explicabo.
                                </h5>
                                </div>
                        </div>       

                        <div class="row bg-white text-dark">

                            <div class="col-sm-6">
                              <div class="card bg-white">
                                <div class="card-header text-dark bg-info">
                                   <h4 class="font-weight-bold text-left text-white">1. Pramuka</h4>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="card-body text-left">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque architecto illum rerum culpa, ad sunt quo impedit ex debitis minus et cum voluptate odit, quos rem eligendi fugiat corporis dignissimos.</h6>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-body">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkYOMLA3tP14iHpxIUcESgzL5zuMbDYoeKQ&usqp=CAU" class="img-thumbnail" alt="Responsive image">

                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                              <div class="col-sm-6">
                              <div class="card bg-white">
                                <div class="card-header text-dark bg-info">
                                   <h4 class="font-weight-bold text-left text-white">2. Voli</h4>
                                </div>
                                <div class="row">
                                    <div class="col-sm-8">
                                        <div class="card-body text-left">
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque architecto illum rerum culpa, ad sunt quo impedit ex debitis minus et cum voluptate odit, quos rem eligendi fugiat corporis dignissimos.</h6>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="card-body">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkYOMLA3tP14iHpxIUcESgzL5zuMbDYoeKQ&usqp=CAU" class="img-thumbnail" alt="Responsive image">

                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                    
            
                       <br>
             </div>          
        </div>

        <div class="row">
            
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
        name: 'PPDBIndex',
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