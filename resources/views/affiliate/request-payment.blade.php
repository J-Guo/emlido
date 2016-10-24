@extends('layouts.affiliate-layout')

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido -Request Payment List </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')


        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">
                <!-- Show Request Payment Information-->
                @if(session()->has('message') )
                    <div class="alert alert-info text-center">
                        <strong>Successful!:</strong>
                        <span>{{ session()->get('message') }}</span>
                        <a class="close" data-dismiss="alert">x</a>
                    </div>
                @endif
                <!-- show dates nearby-->
                @if(!isset($offers) || empty($offers))
                Not Any Assigned Task
                @else
                @foreach($offers as $offer)

                <div class="listing-blok">
                    <form name="requestForm" action="{{url('request-payment/'.$offer->id)}}" method="POST">
                    {{csrf_field()}}
                        <div class="media">
                            <div class="media-left">
                                <div class="list-img">
                                    <img src="{{url('avatars/'.$offer->task->poster->profile_photo)}}"
                                         height="100"  width="100">
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
                                @if($offer->status =="requesting")
                                    <span class="badge badge-primary badge-square text-uppercase">Requesting</span>
                                @elseif($offer->status =="assigned")
                                    <input type="submit"  class="make-offer" name="request" value="Request Payment" />
                                @endif
                            </div>
                        </div>
                    </form>
                </div>

                @endforeach
                @endif

            </div>
        </div>
    </div>

</section>
@stop