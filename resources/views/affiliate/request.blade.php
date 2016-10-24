@extends('layouts.affiliate-layout')

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido -Request Payment </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

        <!-- Pages -->
        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

                <form name="form" action="{{url('request-payment')}}" method="post">
                    {{csrf_field()}}
                    <input type="hidden" name="offerID" value="{{$offer->id}}">
                    <div class="listing-blok">

                            <div class="media">
                                <div class="media-left">
                                    <div class="list-img">
                                        <img src="{{url('avatars/'.$offer->task->poster->profile_photo)}}"
                                             width="100" height="100">
                                    </div>
                                    <!-- Show User Rating-->
                                    <div class="date-list">
                                    <span class="star-rating">
                                    @include('partials.review-stars',['rate' => $offer->task->poster->avgRateAsUser()])
                                    </span>
                                    </div>
                                </div>
                                <div class="media-body"> <a class="media-heading">Task Information</a>
                                    <p>Poster: {{$offer->task->poster->display_name}}</p>
                                    <p>Price : {{$offer->price}}</p>
                                    <p>Date  : {{$offer->date}}</p>
                                </div>
                            </div>
                    </div>

                    <!-- Submit Button-->
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="find-btns acc-btn">
                                <button class="btn" type="submit" style="width: 100%">Request Payment</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    </div>

</section>

@stop