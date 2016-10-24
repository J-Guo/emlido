@extends('layouts.affiliate-layout')

@section('header')
    <meta name="csrf-token" content="{{ csrf_token() }}" />
@stop

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido - My Date </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')

        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

                <!-- Show System Message-->
                @if(session()->has('message'))
                <div class="alert alert-info text-center">
                    <strong>System Message!:</strong>
                    <span>{{ session()->get('message') }}</span>
                    <a class="close" data-dismiss="alert">x</a>
                </div>
                @endif
                <!-- show tasks nearby-->
                @if(!isset($postedTaskArray) || empty($postedTaskArray))
                 <h2>Oops, May do not have task right now, try it later :)</h2>
                @else
                @foreach($postedTaskArray as $key => $poster_task_merged)
                <form id="taskNearby{{$key}}" name="offerForm" action="{{url('make-offer')}}" method="GET">
                {{csrf_field()}}

                <!-- Posted Task -->
                <div class="listing-blok">
                <div class="media">
                    <div class="media-left">
                        <div class="list-img">
                            <img src="{{url('avatars/'.$poster_task_merged['poster']->profile_photo)}}"
                                 width="100" height="100">
                        </div>
                        <!-- Show User Rating-->
                        <div class="date-list">
                            <span class="star-rating">
                            @include('partials.review-stars',['rate' => $poster_task_merged['poster']->avgRateAsUser()])
                            </span>
                        </div>
                    </div>
                    <div class="media-body"> <a class="media-heading">Task Information</a>
                        <input type="hidden" name="task_poster" value="{{$poster_task_merged['task']->task_poster}}" />
                        <input type="hidden" name="task_id" value="{{$poster_task_merged['task']->id}}" />
                        <p>Sender: {{$poster_task_merged['task']->poster->display_name}}</p>
                        <p>Price: ${{$poster_task_merged['task']->price}}</p>
                        <input type="hidden" name="price" value="{{$poster_task_merged['task']->price}}" />
                        <p>Date  : {{$poster_task_merged['task']->date}}</p>
                        <input type="hidden" name="date" value="{{$poster_task_merged['task']->date}}" />

                        <button type="submit" class="make-offer" id="makeOffer" name="makeOffer" value="Make An Offer">Make Offer</button>

                    </div>
                </div>
                </div>

                </form> <!-- End Offer Form-->
                @endforeach
                @endif
            <!-- End tasks Nearby-->

        </div>
    </div>
</section>
@stop

@section('footer')
<script src="{{asset('assets/js/pages/affiliate-location.js')}}" type="text/javascript"></script>
@stop