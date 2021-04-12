<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-user-graduate" aria-hidden="true"></i> Penelusuran Alumni SMPN 1 Salopa </h1>
                <p class="bd-lead">Pendataan serta database alumni SMPN 1 Salopa Kabupaten Tasikmalaya</p>
            </div>
        </header>

        <!-- breadcrumb -->
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-decoration-none"><i class="fa fa-home"></i> Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'alumni' }" class="text-decoration-none"><i class="fa fa-user-graduate"></i> Alumni SMPN 1 Salopa</router-link></li>
        </ol>
        </nav>
        <!-- end breadcrumb -->

        <div class="container-fluid mt-5 mb-5 ">

         

            <div class="row ">
                <div class="card">
                    <div class="card-header">
                    
                    </div>

                    <div class="card-body">

                                      <br>
                     <div class="row">
                                                <div class="col-md-6">
                                                    <h5 class="text-justify"> Silahkan mengisi data alumni, dengan adanya penelusuran alumni ini para alumni bisa mencari teman-teman sekolah dulu. <br> &nbsp;&nbsp; Jika anda sudah mengisi data sebagai alumni SMP NEGERI 1 SALOPA, maka data anda akan kami simpan di database kami, bagian publishing website akan mempublish data anda.</h5>
                                                <br>
                                                </div>
                                               <div class="col-md-6 text-center">
                                                    <h5 class="text-justify"> Kilik tombol berikut untuk menuju GoogleForm Alumni SMPN 1 Salopa :</h5>
                                                   <a class="btn btn-primary" href="https://forms.gle/TddYHeZJuyyFvqq36" role="button">Isi Formulir Alumni</a>
                                                   <hr>
                                               </div>
                                               <hr>
                     </div>      

                                        <div class="col-md-12 bg-info text-dark">
                                            <br>
                                            <h3 class="text-center"><strong>Ayo cari teman mu...&#128515;</strong></h3>
                                            <br>
                                        </div>
                                        <br>
                                         <div class="col-md-12">
                                                <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><strong>  <i class="fa fa-search"></i> Pencarian</strong></span>
                                                </div>
                                                <input type="text" id="myInputAlumni" onkeyup="myFunctionAlumni()" class="form-control" placeholder="Cari Alumni Dengan Mengetik Nama..." aria-label="Pencarian" aria-describedby="basic-addon1">
                                            </div>

                                            <div class="table-responsive-md">
                                                    <table class="table table-striped table-primary table-bordered " id="myTableAlumni">
                                                        <thead>
                                                            <tr>
                                                                <th><h5> # </h5></th>
                                                                <th><h5> Nama Lengkap Alumni</h5></th>
                                                                <th><h5> Angkatan</h5></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr  v-for="alumni in alumnis" :key="alumni.Angkatan">
                                                                <td></td>                                      
                                                                <td>
                                                                    {{ alumni.Nama }}
                                                                </td>
                                                             
                                                                <td>
                                                                    {{ alumni.Angkatan }}
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                </table>
                                            </div>
                                         </div>

                              

                                        
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
    import axios from 'axios'

    //import component
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"

    import Vue from 'vue';
    import { VuejsDatatableFactory } from 'vuejs-datatable';
    
    Vue.use( VuejsDatatableFactory );

    export default {
        name: 'AlumniIndex',
        components: {
            // //loader component
            // ContentLoader,
            // component app
            Header,
            Footer
        },
        
        el: '#vue-root',

        data() {
            return {
            alumnis: { 

               
                

            },
            
            };

            
        },
        mounted() {
                this.getAlumni()

                
            },
        methods: {
        getAlumni() {
                    axios.get("https://api.apispreadsheets.com/data/10244/").then(response => {
                        this.alumnis = response.data.data
                        console.log(this.alumnis)
                    }).catch(response => {
                        console.log(response)
                    })
                },
        }
        
        
    
    }
</script>