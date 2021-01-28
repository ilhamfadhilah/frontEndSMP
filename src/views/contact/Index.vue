<template>
    <div class="post-index">
        <!-- header -->
        <Header />
        <!-- end header -->

        <!-- main content -->
        <header class="pt-5 border-bottom bg-light">
            <div class="container pt-md-1 pb-md-1">
                <h1 class="bd-title mt-4 font-weight-bold"><i class="fa fa-phone" aria-hidden="true"></i> KONTAK</h1>
                <p class="bd-lead">Kontak SMK Indonesia.</p>
            </div>
        </header>

        <!-- breadcrumb -->
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="{ name: 'home' }" class="text-decoration-none"><i class="fa fa-home"></i> Home</router-link></li>
            <li class="breadcrumb-item"><router-link :to="{ name: 'contact' }" class="text-decoration-none"><i class="fa fa-phone"></i> Kontak</router-link></li>
        </ol>
        </nav>
        <!-- end breadcrumb -->

        <div class="container-fluid mt-5 mb-5">

            <div class="row">
                <div class="col-md-7">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-body">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15822.241671196525!2d108.27156!3d-7.51368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee0280a1a66722bc!2sSMPN%201%20Salopa!5e0!3m2!1sen!2sid!4v1611803869183!5m2!1sen!2sid" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card border-0 shadow-sm rounded">
                        <div class="card-body">
                            <h3>KONTAK KAMI</h3>
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