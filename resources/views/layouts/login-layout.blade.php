<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width,height=device-height,target-densitydpi=device-dpi,user-scalable=no" />
    <title>EMLIDO</title>
    <link rel="stylesheet" type="text/css" href="{{asset('assets/Frontend/css/bootstrap.min.css')}}"/>
    <link rel="stylesheet" type="text/css" href="{{asset('assets/Frontend/css/owl.carousel.css')}}"  />
    <link rel="stylesheet" type="text/css" href="{{asset('assets/Frontend/css/font-awesome.min.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{asset('assets/Frontend/css/main.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{asset('assets/Frontend/css/responsive.css')}}" />
    <link rel="stylesheet" type="text/css" href="{{asset('assets/Frontend/css/animated.css')}}" />

    <script src="{{asset('assets/Frontend/js/jquery.js')}}"></script>
    <script  src="{{asset('assets/Frontend/js/jquery.validate.min.js')}}"></script>

</head>
<body>
<input type="hidden" id="base_url" name="base_url" value="http://localhost/newnox/public">
<div class="customer-loader" id="customer_loader" style="display: none;"><img src="{{asset('assets/Frontend/img/hearts.svg')}}"></div>

<script  src="{{asset('assets/Frontend/js/html5lightbox.js')}}"></script>

<!-- Content-->
@yield('content')

<script src="{{asset('assets/Frontend/js/bootstrap.min.js')}}"></script>
<script src="{{asset('assets/Frontend/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('assets/Frontend/js/custom.js')}}"></script>
<script  src="{{asset('assets/Frontend/js/validation.js')}}"></script>
<script  src="{{asset('assets/Frontend/js/wow.js')}}"></script>
<!-- Footer-->
@yield('footer')

</body>
</html>
 