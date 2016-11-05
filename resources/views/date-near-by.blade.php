@extends('layouts.main-layout')

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido - My Date </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar')

        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

            <!-- Show Braintree Transaction Errors-->
            @if(session()->has('transactionError'))
            <div class="alert alert-danger text-center">
                <strong>Failed!:</strong>
                <span>{{ session()->get('transactionError') }}</span>
                <a class="close" data-dismiss="alert">x</a>
            </div>
            @endif
            <!-- Show Duplicated Task Errors-->
            @if(session()->has('taskError'))
            <div class="alert alert-danger text-center">
                <strong>Failed!:</strong>
                <span>{{ session()->get('taskError') }}</span>
                <a class="close" data-dismiss="alert">x</a>
            </div>
            @endif

            <!-- show dates nearby-->
            @if(!isset($sentOfferArray) || empty($sentOfferArray))
            {{--<h2>Oops, You dont get any offers from affiliates please wait for a moment</h2>--}}

            <!-- Task Poster Profile -->
            @if(isset($posted_task) && count($posted_task) > 0)
                <div class="listing-blok">
                    <div class="media">
                        <div class="media-left">
                            <div class="list-img">
                                <img src="{{ isset($posted_task) ? url("avatars/".$posted_task->poster->profile_photo) :url("avatars/default.jpg")}}"
                                     height="100" width="100">
                            </div>
                        </div>
                        <div class="media-body"> <a class="media-heading">Task Information</a>
                            <p>Price : ${{isset($posted_task) ? $posted_task->price:''}}</p>
                            <p>Date  : {{isset($posted_task) ? $posted_task->date:''}}</p>
                            <p>Status: <span class="badge badge-primary badge-square text-uppercase">Waiting For Offer</span> </p>
                        </div>
                    </div>
                </div>
            @endif
            @else
                @foreach($sentOfferArray as $offer_affiliate_merged)
                <form id="confirmForm" action="{{url('confirm-date')}}" method="post">
                    {{csrf_field()}}

                    <div class="listing-blok">
                        <div class="media">
                            <div class="media-left">
                                <div class="list-img">
                                    <a href="{{url('affiliate-profile/'.$offer_affiliate_merged['sender']->id)}}">
                                    <img src="{{url('avatars/'.$offer_affiliate_merged['sender']->profile_photo)}}"
                                         height="100"  width="100">
                                    </a>
                                </div>
                                <!-- Show User Rating-->
                                <div class="date-list">
                                <span class="star-rating">
                                @include('partials.review-stars',['rate' => $offer_affiliate_merged['offer']->sender->avgRateAsAffiliate()])
                                </span>
                                </div>
                            </div>
                            <div class="media-body"> <a class="media-heading">Offer Information</a>
                                <p>Sender: {{$offer_affiliate_merged['offer']->sender->display_name}}</p>
                                <p>Price : ${{$offer_affiliate_merged['offer']->price}}</p>
                                <p>Date  : {{$offer_affiliate_merged['offer']->date}}</p>
                                <input type="hidden" name="offer_maker"
                                       value="{{$offer_affiliate_merged['offer']->offer_maker}}" />
                                <input type="hidden" name="offer_id"
                                       value="{{Crypt::encrypt($offer_affiliate_merged['offer']->id)}}" />

                                    <button class="make-offer" type="submit" onclick="return confirm('Once you confirm offer, you will be charged. Are you sure to accept this offer?');">Confirm Date</button>

                            </div>
                        </div>
                    </div>

                    </form>    <!-- End Offer Form-->
                    @endforeach
            @endif
            <!-- End dates Nearby-->

            </div>
        </div>
    </div>
</section>
@stop