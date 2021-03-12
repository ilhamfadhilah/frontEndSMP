<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-user-cog" aria-hidden="true"></i> Pegawai SMPN 1 Salopa</h1>
                <p class="bd-lead">Data Pegawai dan Guru di SMPN 1 Salopa.</p>
            </div>
        </header>

        <!-- breadcrumb -->
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-decoration-none"><i class="fa fa-home"></i> Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'worker' }" class="text-decoration-none"><i class="fa fa-image"></i> Galeri Pegawai</router-link></li>
        </ol>
        </nav>
        <!-- end breadcrumb -->

        <div class="container-fluid mt-5 mb-5">

            <div class="row">

                <div v-if="workers.length > 0" class="row">
                    <div class="col-md-4 mb-4" v-for="worker in workers" :key="worker.id">
                        <div class="card h-100 shadow-sm border-0 rounded-lg">
                            <div class="card-img">
                                <img :src="worker.image" class="w-100"
                                    style="height:300px;object-fit: cover;border-top-left-radius: .3rem;border-top-right-radius: .3rem;">
                            </div>
                            <div class="card-body text-center bg-primary text-white">
                                <h6>Nama : <strong>{{ worker.name }}</strong></h6>
                            </div>
                            <div class="card-body text-center bg-white text-dark">
                                <h6>NIP : <strong>{{ worker.nip }}</strong></h6>
                                <h6>Mengajar Mapel : <strong>{{ worker.subject }}</strong></h6>
                                <h6>Tugas Tambahan : <strong>{{ worker.task }}</strong></h6>
                            </div>

                        </div>
                    </div>
                </div>

                <div v-else>
                    <div class="row">
                        <div class="col-md-4 mb-3" v-for="loader in workers_loader" :key="loader">
                            <div class="card border-0 shadow-sm rounded-lg">
                                <div class="card-body p-2">
                                    <ContentLoader />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-primary btn-md" v-on:click="loadMore"><span class="fa fa-arrow-down"></span> LIHAT LEBIH BANYAK</button>
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
        ContentLoader
    } from 'vue-content-loader'

    //import axios
    import axios from 'axios'

    //import component
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"

    export default {
        name: 'WorkerIndex',
        components: {
            //loader component
            ContentLoader,
            // component app
            Header,
            Footer
        },
        data() {
            return {
                //define properties
                workers: [],
                //define content loader data
                workers_loader: 6,
                //pagination
                moreExists: false,
                nextPage: 0
            }
        },
        mounted() {
            this.getWorkers()
        },
        methods: {
            getWorkers() {
                axios.get('/api/worker').then(response => {
                    this.workers = response.data.data.data
                    if (response.data.data.current_page < response.data.data.last_page) {
                        this.moreExists = true
                        this.nextPage = response.data.data.current_page + 1
                    } else {
                        this.moreExists = false
                    }
                }).catch(response => {
                    console.log(response)
                })
            },
            //load more function
            loadMore() {
                axios.get('/api/worker?page='+this.nextPage).then(response => {
                  if (response.data.data.current_page < response.data.data.last_page) {
                        this.moreExists = true
                        this.nextPage = response.data.data.current_page + 1
                    } else {
                        this.moreExists = false
                    }
                    response.data.data.data.forEach(data => {
                        this.workers.push(data)
                    })
                }).catch(response => {
                    console.log(response)
                })
            }
        }
    }
</script>