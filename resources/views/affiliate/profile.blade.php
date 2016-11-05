@extends('layouts.affiliate-layout')

@section('header')
<!-- Five Stars Review Form Style-->
<link rel="stylesheet" href="{{asset('assets/css/view-profile.css')}}">
@stop

@section('content')
<section class="contact-top">

    <div class="menu-margin">
        <h1 class="clearfix">Emlido - User Profile </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

        <!-- Pages -->
        <!-- Pages -->
        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

                <div class="profile-pic back-profile">
                    <div class="profl-img">
                        <img src="{{url('avatars/'.$user->profile_photo)}}"
                             width="100" height="100">
                    </div>
                    <div class="rating clearfix">
                        <h4> {{$user->display_name}}  </h4>
                        @include('partials.review-stars',['rate' =>$user->avgRateAsUser()])
                    </div>
                </div>
                <div class="profil-info">
                    <div class="form-group clearfix">
                        <div class="col-xs-6">
                            <h4>$560</h4>
                            <p>Avg Cost</p>
                        </div>
                        <div class="col-xs-6">
                            <h4 id="profile_count">29</h4>
                            <p>Completed Task</p>
                        </div>

                    </div>
                </div>


                <fieldset>
                    <legend>
                        <label class="control-label">User's Reviews</label>
                    </legend>

                </fieldset>

                <div class="review-line col-xs-12">
                    <div id="stars">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}" >
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                    </div>
                    <div id="texts" >
                        <p class="reviews-title">17 (58%)</p>
                    </div>
                </div>

                <div class="review-line col-xs-12">

                    <div id="stars">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}" >
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                    </div>
                    <div id="texts" >
                        <p class="reviews-title">6 (20%)</p>
                    </div>
                </div>
                <div class="review-line col-xs-12">
                    <div id="stars">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}" >
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                    </div>
                    <div id="texts" >
                        <p class="reviews-title">3 (10%)</p>
                    </div>
                </div>
                <div class="review-line col-xs-12">
                    <div id="stars">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}" >
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                    </div>
                    <div id="texts" >
                        <p class="reviews-title">2 (6%)</p>
                    </div>
                </div>
                <div class="review-line col-xs-12">
                    <div id="stars">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-on.png')}}" >
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                        <img class="star" src="{{asset('assets/Frontend/img/stars-off.png')}}">
                    </div>
                    <div id="texts" >
                        <p class="reviews-title">1 (3%)</p>
                    </div>
                </div>



                <div class="col-xs-12">
                    <div class="find-btns acc-btn">
                        <button class="btn" name="returnTaskNearby" onclick="location.href='{{url('task-nearby')}}'" style="width: 100%"> Return To Task Nearby</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
@stop