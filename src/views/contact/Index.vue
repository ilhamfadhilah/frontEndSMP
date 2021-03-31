<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-school" aria-hidden="true"></i> PROFIL SEKOLAH</h1>
                <p class="bd-lead">Profil SMPN 1 Salopa</p>
            </div>
        </header>

        <!-- breadcrumb -->
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-decoration-none"><i class="fa fa-home"></i> Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'contact' }" class="text-decoration-none"><i class="fa fa-phone"></i> Profil Sekolah</router-link></li>
        </ol>
        </nav>
        <!-- end breadcrumb -->

        <div class="container-fluid mt-5 mb-5 " >

            <div class="row">
                <div class="col-md-6 animate__animated animate__fadeInLeft animate__slow">
                   <div class="card">
                       <div class="card-header bg-success text-white text-center">
                           <h4><i class="fa fa-star text-warning"></i> VISI SMPN 1 SALOPA <i class="fa fa-star text-warning"></i></h4>
                       </div>
                       <div class="card-body">
                           
                           <h4 class="text-center">"Unggul Dalam Prestasi, Tangguh dalam Kompetisi, Santun dan Budi Pekerti Islami"</h4>
                
                       </div>
                   </div>
                   </div>
                <div class="col-md-6 animate__animated animate__fadeInRight animate__slow">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-header text-center bg-danger text-white">
                                <h3> <i class="fa fa-phone"></i> KONTAK KAMI</h3>
                        </div>
                        <div class="card-body">
                            
                            <hr>
                            <p>
                                <i class="fa fa-map-marker" aria-hidden="true"></i> Jl. Raya Salopa No. 160, Kawitan, Kec. Salopa, Kab. Tasikmalaya Prov. Jawa Barat

                                <i class="fas fa-phone"></i> +6200-000-000

                                <i class="fas fa-envelope"></i> smpn1salopa.sch.id
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                    <div class="col-md-6 animate__animated animate__fadeInLeft animate__slow">
                    <div class="card">
                       <div class="card-header bg-success text-white text-center">
                           <h4> <i class="fa fa-star text-warning"></i> MISI SMPN 1 SALOPA <i class="fa fa-star text-warning"></i></h4>
                       </div>
                       <div class="card-body">
                           <div class="row ">
                               <div class="col-md-6">
                                   <h6 id="misi" class="text-justify"> 1. Menyelenggarakan pendidikan secara efektif sehingga peserta didik berkembang secara maksimal.  </h6>
                               </div>
                               <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >6. Mengembangkan budaya sekolah dan menciptakan lingkungan sekolah yang sehat sebagai tempat belajar yang menyenangkan. </h6>
                               </div>
                               <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >2. Menyelenggarakan pembelajaran dengan multi pendekatan untuk menumbuh kembangkan kemampuan berfikir aktif, kreatif, mampu berkompetisi secara sehat, dan terbiasa memecahkan masalah dengan tuntas.  </h6>
                               </div>
                               <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >5. Menumbuh kembangkan prilaku terpuji dalam praktik nyata sehingga peserta didik menjadi teladan bagi teman dan masyarakat.  </h6>
                               </div>
                                <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >3. Menyelenggarakan pengembangan diri peserta didik sesuai minat dan bakatnya. </h6>
                               </div>
                              
                                <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >7. Meningkatkan kerjasama dengan masyarakat/komite sekolah dalam upaya terwujudnya sekolah yang terakreditasi baik. </h6>
                               </div>
                               <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >4. Menumbuh kembangkan lingkungan perilaku religius pada warga sekolah untuk mengahayati dan mengamalkan agamanya secara nyata. </h6>
                               </div>
                              
                               <div class="col-md-6">
                                   <h6 id="misi" class="text-justify" >8. Menyelenggarakan kegiatan literasi bagi warga sekolah.     </h6>
                               </div>
                           </div>
                           
                       </div>
                   </div>
                </div>
                <div class="col-md-6 animate__animated animate__fadeInRight animate__slow">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-header bg-warning">
                            <h3 class="text-center"><i class="fa fa-map"></i> Lokasi SMPN 1 Salopa</h3>
                        </div>
                        <div class="card-body">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15822.241671196525!2d108.27156!3d-7.51368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee0280a1a66722bc!2sSMPN%201%20Salopa!5e0!3m2!1sen!2sid!4v1611803869183!5m2!1sen!2sid" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

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
    //import component
    import Header from "@/components/Header"
    import Footer from "@/components/Footer"


    export default {
        name: 'ContactIndex',
        components: {
            Header,
            Footer
        }
    }
</script>