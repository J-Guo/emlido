@extends('layouts.affiliate-layout')

@section('header')
        <!-- Five Stars Review Form Style-->
<link rel="stylesheet" href="{{asset('assets/css/review-form.css')}}">
@stop

@section('content')
<section class="contact-top">

    <div class="menu-margin">
        <h1 class="clearfix">Emlido - Make Review </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

        <!-- Pages -->
        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">
                <form name="form" action="{{url('areviews')}}" method="post">
                    {{csrf_field()}}
                    <input type="hidden" name="offerid" value="{{$offer->id}}">


                    <div class="profile-pic back-profile">
                        <div class="profl-img">
                            <img src="{{url('avatars/'.$offer->task->poster->profile_photo)}}"
                                 width="100" height="100">
                        </div>
                        <div class="rating clearfix">
                            <h4> {{$offer->task->poster->display_name}}  </h4>
                            @include('partials.review-stars',['rate' =>$offer->task->poster->avgRateAsUser()])
                        </div>
                    </div>
                    <div class="profil-info">
                        <div class="form-group clearfix">
                            <div class="col-xs-6">
                                <h4>14</h4>
                                <p>Posted Tasks</p>
                            </div>
                            <div class="col-xs-6">
                                <h4 id="profile_count">11</h4>
                                <p>5 Stars</p>
                            </div>

                        </div>
                    </div>
                    <div class="listing-blok">
                        <div class="media">
                            <div class="media-body"> <a class="media-heading">Task Information</a>
                                <div class="row">
                                    <div class="col-xs-3"><p>Poster: </p></div>
                                    <div class="col-xs-3"><p>Price: </p></div>
                                    <div class="col-xs-6"><p>Date  : </p></div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-3"><a class="media-heading">{{$offer->task->poster->display_name}}</a></div>
                                    <div class="col-xs-3"><a class="media-heading">${{$offer->price}}</a></div>
                                    <div class="col-xs-6"><a class="media-heading">{{$offer->date}}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" style="margin-top: 40px">
                        <div class="acidjs-rating-stars">
                            <h2 style="color: #ffffff;margin-bottom: 30px">Please Review This Task</h2>
                            <input type="radio" name="rating" id="rating-0" value="5" /><label for="rating-0"></label>
                            <input type="radio" name="rating" id="rating-1" value="4" /><label for="rating-1"></label>
                            <input type="radio" checked="checked" name="rating" id="rating-2" value="3" /><label for="rating-2"></label>
                            <input type="radio" name="rating" id="rating-3" value="2" /><label for="rating-3"></label>
                            <input type="radio" name="rating" id="rating-4"  value="1" /><label for="rating-4"></label>
                        </div>
                    </div>

                    <div class="col-xs-12">
                        <div class="find-btns acc-btn">
                            <button class="btn" type="submit" name="makeReview" style="width: 100%"> Thank Your Stars</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>

</section>
@stop