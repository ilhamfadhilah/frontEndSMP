<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark text-dark" style="border-top: 5px solid #af8ce2;">
        <div class="container-fluid">
            <!-- <router-link :to="{name: 'home'}" class="navbar-brand"><i class="fa fa-graduation-cap" aria-hidden="true"></i> SMPN 1 Salopa</router-link> -->
           
            <router-link :to="{name: 'home'}" class="navbar-brand"> <img src="assets/images/logo.png" alt="" class="image-thumbnail col-xs-1 col-sm-1 image-responsive" style="width:auto; height:auto; max-width:40px;"> SMPN 1 Salopa</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarCollapse">
                    <div class="dropdown">
                    <button class="btn bg-primary-outline text-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   >
                                <i class="fa fa-user"></i> KESISWAAN
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item " aria-hidden="true"  href="https://www.smpn1salopa.sch.id/" > <i class="fa fa-user-cog text-dark"></i> Direktori Siswa</a>
                            <router-link :to="{name: 'osis'}" class="nav-link text-dark"><i class="fa fa-user-tie text-dark" aria-hidden="true"></i> OSIS</router-link>
                            <router-link :to="{name: 'extrakulikuler'}" class="nav-link text-dark"><i class="fa fa-user-tie text-dark" aria-hidden="true"></i> Extrakulikuler</router-link>
                            
                        </div>
                </div>
                <div class="dropdown">
                    <button class="btn bg-primary-outline text-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   >
                               <i class="fa fa-user"></i> PPDB
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <router-link :to="{name: 'ppdb'}" class="nav-link text-dark"><i class="fa fa-user-tie text-dark" aria-hidden="true"></i> PPDB</router-link>
                              <router-link :to="{name: 'view'}" class="nav-link text-dark"><i class="fa fa-user-tie text-dark" aria-hidden="true"></i> List Pendaftar</router-link>
                            
                        </div>
                </div>
                
                <ul class="navbar-nav mr-auto mb-2 mb-md-0 ">
                      <li class="nav-item">
                        <router-link :to="{name: 'contact'}" class="nav-link"><i class="fa fa-school" aria-hidden="true"></i> PROFIL SEKOLAH</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'post'}" class="nav-link"><i class="fa fa-book-open" aria-hidden="true"></i> BERITA</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'event'}" class="nav-link"><i class="fa fa-calendar" aria-hidden="true"></i> AGENDA</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'photo'}" class="nav-link"><i class="fa fa-image" aria-hidden="true"></i> GALERI</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'video'}" class="nav-link"><i class="fa fa-video" aria-hidden="true"></i> VIDEO</router-link>
                    </li>
                  
                    <li class="nav-item">
                        <router-link :to="{name: 'worker'}" class="nav-link"><i class="fa fa-user-cog" aria-hidden="true"></i> PEGAWAI</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'alumni'}" class="nav-link"><i class="fa fa-user-graduate" aria-hidden="true"></i> ALUMNI</router-link>
                    </li>
                    
                    <li class="nav-item">
                         
                        <!-- <router-link :to="{name: 'worker'}" class="nav-link"><i class="fa fa-user-cog" aria-hidden="true"></i> Direktori Siswa</router-link> -->
                        
                    </li>
                    
                </ul>
            
   
            </div>
            
        </div>
    </nav>  
</template>

<script>
    export default {
        name: 'Header'
    }
</script>