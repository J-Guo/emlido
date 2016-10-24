@extends('layouts.affiliate-layout')

@section('content')
<section class="contact-top">

<div class="menu-margin">
    <h1 class="clearfix">Emlido - Reviews List </h1>

    <!-- Left Side Bar -->
    @include('partials.left-side-bar-affiliate')

    <!-- Pages -->
    <div class="contact-form date-listing col-offset-top-25">
        <div class="container">
            <div class="page-content">
                    <!-- Show Session Message-->
                    @if(session()->has('message') )
                    <div class="alert alert-info text-center">
                        <strong>Successful!:</strong>
                        <span>{{ session()->get('message') }}</span>
                        <a class="close" data-dismiss="alert">x</a>
                    </div>
                    @endif
                    <!-- Show Reviews List For Affiliate-->
                    @if(!isset($offers) || empty($offers) || $offers->isEmpty())
                        <h2>No any review right now </h2>
                    @else
                        @foreach($offers as $offer)
                            <div class="listing-blok">
                                <form name="releaseForm" action="{{url('areviews/'.$offer->id)}}" method="POST">
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
                                                @include('partials.review-stars',['rate' =>$offer->task->poster->avgRateAsUser() ])
                                                </span>
                                            </div>
                                        </div>
                                        <div class="media-body"> <a class="media-heading">Task Information</a>
                                            <p>Sender:  {{$offer->task->poster->display_name}}</p>
                                            <p>Price: ${{$offer->price}}</p>
                                            <p>Date  : {{$offer->date}}</p>

                                            @if($offer->status == 'requested')
                                                <button type="submit"  class="make-offer" name="review" value="Make A Review" >Make Review</button>
                                            @else
                                                <span class="badge badge-primary badge-square text-uppercase">Reviewed</span>
                                            @endif

                                        </div>
                                    </div>

                                </form> <!-- End Release Payment Box -->
                            </div>
                        @endforeach
                    @endif

            </div>
        </div>
    </div>
    </div>
</section>
@stop