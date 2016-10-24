@extends('layouts.welcome-layout')

@section('content')

    <section class="first-temp-slidr">
        <section class="header">
            <img src="{{asset('assets/Frontend/img/make-you-happy.png')}}"/>
        </section>
        <div class="owl-carousel first-slider home-slider">
            <div class="item" style="background-image:url('{{asset('images/front-slides/952.png')}}'); background-size:cover; height:100%;">
                <div class="item1-content">
                    <p>After having searched for each other for
                        more than 25 years we are now happy to
                        announce that we will celebrate</p>
                    <h4>Dates on Demand</h4>
                </div>
            </div>
            <div class="item" style="background-image:url('{{asset('images/front-slides/998.png')}}'); background-size:cover; height:100%;">
                <div class="item1-content item-c1">
                    <a href="https://www.youtube.com/watch?v=KXdUNp_9oHs" class="html5lightbox animated zoomIn">
                        <img src="{{asset('assets/Frontend/img/video-icon.png')}}" />
                    </a>
                    <p>After having searched for each other for
                        more than 25 years we are now happy to
                        announce that we will celebrate</p>
                </div>
            </div>
            <div class="item" style="background-image:url('{{asset('images/front-slides/430.png')}}'); background-size:cover; height:100%;">
                <div class="item1-content item-c2">
                    <p>After having searched for each other for
                        more than 25 years we are now happy to
                        announce that we will celebrate</p>
                    <h4>Dates on Demand</h4>
                    <div class="find-btns acc-btn">
                        <a class="btn" href="{{url('login')}}">Emlido Account</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop
