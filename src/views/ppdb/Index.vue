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
                            <div class="container text-dark text-left ">
                              
                               <div class="row text-center">
                                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                
                                    <h1><strong>Selamat Datang Di Website PPDB Online</strong></h1>
                                    <h4>SMPN 1 Salopa Tahun Ajaran 2021/2022</h4>
                                    <!-- <div class="btn btn-primary">
                                        <router-link :to="{ name: 'daftar' }" class="text-decoration-none text-white"><i class="fa fa-paper-plane"></i> Daftar Sekarang</router-link>
                                    </div> -->
                     <a href="https://forms.gle/HGYrry2bycSBo5rP8" type="button" class="btn btn-primary btn-lg" role="button" aria-pressed="true">Daftar Sekarang</a>

                                </div>
                                
                                <div class="col-lg-6 order-1 order-lg-2 hero-img">
                                <img src="assets/img/daftar.png" class="img-fluid animate__animated animate__fadeInRight animate__slow" alt="">
                                </div>

                            </div> 
                            
                                <br>
                                <br>
                             <div class="row">
                                <div class="col-lg-6 animate__animated animate__fadeInLeft animate__slow animate__delay-1s">
                                    <img src="assets/img/brosur smpn 1 salopa v1.jpg" class="img-fluid" alt="">
                                </div>
                                <div class="col-lg-6 d-flex flex-column justify-contents-center animate__animated animate__fadeInRight animate__slow animate__delay-s">
                                    <div class="content pt-4 pt-lg-0">
                                    <h3>Pendaftaran Online</h3>
                                    <p class="font-italic">
                                        Ditengah merebaknya pandemi virus Covid-19 di Indonesia akhir-akhir ini. Untuk memudahkan calon peserta didik baru dalam melakukan pendaftaran, maka kami meyediakan pelayanan pendaftaran peserta didik baru mode online atau daring dengan alur pendaftaran sebagai berikut :
                                    </p>
                                    <ul>
                                        <lo><i class="icofont-check-circled "></i> Mengisi formulir pendaftaran online</lo><br>
                                        <lo><i class="icofont-check-circled"></i> Setelah melakukan pengisian formulir online dan kirim data, Screenshot halaman konfirmasi sebagai bukti pendaftaran</lo><br>
                                        <lo><i class="icofont-check-circled"></i> Menerima pengumuman</lo><br>
                                        <lo><i class="icofont-check-circled"></i> Melakukan daftar ulang</lo><br>
                                        <lo><i class="icofont-check-circled"></i> Masuk kegiatan belajar mengajar</lo><br>
                                    </ul>
                                    <p>
                                        Selain pendaftaran mode online atau daring, kami juga masih melayani pendaftaran offline/luring dengan datang langsung ke sekretariat pendaftaran (Ruang Tata Usaha SMPN 1 Salopa).
                                    </p>
                                    </div>
                                </div>
                                </div>
    

                                </div>
                        </div>       

                        <!-- <div class="row bg-white text-dark">

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
                        </div> -->
                             
            

                    
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