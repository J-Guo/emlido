@extends('layouts.main-layout')

@section('content')
<section class="contact-top">


    <div class="menu-margin">
        <h1 class="clearfix">Emlido - Reviews List </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar')

    <!-- Pages -->
    <div class="contact-form date-listing col-offset-top-25">
        <div class="container">
            <div class="page-content">
                <!-- Show Information-->
                @if(session()->has('message') )
                    <div class="alert alert-info text-center">
                        <strong>Successful!:</strong>
                        <span>{{ session()->get('message') }}</span>
                        <a class="close" data-dismiss="alert">x</a>
                    </div>
                @endif
                <!-- Show Reviews List-->
                @if(!isset($tasks) || empty($tasks) || $tasks->isEmpty())
                <h2>No any review right now </h2>
                @else
                @foreach($tasks as $task)
                {{--*/ $offer = $task->offers()->whereIn('status',['requested','reviewed'])->first() /*--}}

                <div class="listing-blok">
                    <form name="releaseForm" action="{{url('reviews/'.$task->id)}}" method="POST">
                        {{csrf_field()}}
                    <div class="media">
                        <div class="media-left">
                            <div class="list-img">
                                <img src="{{url('avatars/'.$offer->sender->profile_photo)}}"
                                     height="100"  width="100">
                            </div>
                            <!-- Show User Rating-->
                            <div class="date-list">
                                <span class="star-rating">
                                @include('partials.review-stars',['rate' => $offer->sender->avgRateAsAffiliate()])
                                </span>
                            </div>
                        </div>
                        <div class="media-body"> <a class="media-heading">Task Information</a>
                            <p>Sender: {{$offer->sender->display_name}}</p>
                            <p>Price: ${{$offer->price}}</p>
                            <p>Date  : {{$offer->date}}</p>

                            @if($task->status == 'requested')
                                <button type="submit"  class="make-offer" name="review" value="Make A Review" >Make Review</button>
                            @else
                                <span class="badge badge-primary badge-square text-uppercase">Reviewed</span>
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
    </div>

</section>
<script  src="{{asset('assets/Frontend/js/jquery.raty.min.js') }}"></script>
@stop