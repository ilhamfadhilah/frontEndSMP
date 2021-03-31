<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-graduation-cap" aria-hidden="true"></i> List PPDB SMPN 1 Salopa </h1>
                <p class="bd-lead">List Pendaftar Pada PPDB SMPN 1 Salopa Tahun Ajaran 2020/2021</p>
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
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h3>Daftar Calon Peserta Didik SMPN 1 Salopa Tahun Ajaran 2021/2022</h3>
                        </div>
                        <div class="card-body">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><strong>  <i class="fa fa-search"></i> Pencarian</strong></span>
                                                </div>
                                                <input type="text" id="myInput" onkeyup="myFunction()" class="form-control" placeholder="Cari Peserta Didik Dengan Nama Lengkap..." aria-label="Pencarian" aria-describedby="basic-addon1">
                                            </div>

                                            <div class="table-responsive-md">
                                                    <table class="table table-striped table-primary table-bordered" id="myTable">
                                                        <thead>
                                                            <tr>
                                                                <th><h5> # </h5></th>
                                                                <th><h5> Nama Lengkap Calon Peserta Didik</h5></th>
                                                                <th><h5> Nama Lengkap Ayah Calon Peserta Didik</h5></th>
                                                                <th><h5> Nama Lengkap Wali Calon Peserta Didik</h5></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr  v-for="ppdb in ppdbs" :key="ppdb.Nama_Lengkap">
                                                                <td></td>                                      
                                                                <td>
                                                                    {{ ppdb.Nama_Lengkap }}
                                                                </td>
                                                                <td>
                                                                    {{ ppdb.Nama_Lengkap_Ayah }}
                                                                </td>
                                                                <td>
                                                                    {{ ppdb.Nama_Lengkap_Wali }}
                                                                </td>

                                                            </tr>
                                                        </tbody>
                                                </table>
                                            </div>
                                         <!-- <ul id="example-1">
                                            <li v-for="ppdb in ppdbs" :key="ppdb.nama_lengkap">
                                                {{ ppdb.nama_lengkap }}
                                        </li>
                                       </ul> -->
                                       
                                       
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
export default {
    
}
</script>

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

    export default {
        name: 'ViewIndex',
        components: {
            // //loader component
            // ContentLoader,
            // component app
            Header,
            Footer
        },
     data() {
        return {
        ppdbs: {},
        
        // ppdbs_loader: 6
        // let a = 1;
        };
    },
    mounted() {
            this.getPpdb()

            
        },
    methods: {
     getPpdb() {
                axios.get("https://api.apispreadsheets.com/data/9441/").then(response => {
                    this.ppdbs = response.data.data
                    console.log(this.ppdbs)
                }).catch(response => {
                    console.log(response)
                })
            },
    }
    
    }

</script>