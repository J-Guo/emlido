@extends('layouts.affiliate-layout')

@section('content')

<section class="contact-top">

    <!-- Pages -->
    <div class="menu-margin">
        <h1 class="clearfix">Emlido - Assigned Tasks </h1>

        <!-- Left Side Bar -->
        @include('partials.left-side-bar-affiliate')


        <div class="contact-form date-listing col-offset-top-25">
            <div class="container">

                <!-- show tasks list-->
                @if(!isset($taskList) || empty($taskList))
                    <h2>Oops, You have not send any offer</h2>
                @else
                    @foreach($taskList as $key => $offer_poster_merged)
                        <form name="chatForm" action="{{url('assigned-task/'.$offer_poster_merged['offer']->id)}}" method="get">
                        {{csrf_field()}}


                        <div class="listing-blok">
                            <div class="media">
                                <div class="media-left">
                                    <div class="list-img">
                                        <img src="{{url('avatars/'.$offer_poster_merged['poster']->profile_photo)}}"
                                             width="100" height="100" >
                                    </div>
                                    <!-- Show User Rating-->
                                    <div class="date-list">
                            <span class="star-rating">
                            @include('partials.review-stars',['rate' =>$offer_poster_merged['poster']->avgRateAsUser()])
                            </span>
                                    </div>
                                </div>
                                <div class="media-body"> <a class="media-heading">Task Information</a>
                                    <p>Poster: {{$offer_poster_merged['poster']->display_name}}</p>
                                    <p>Price : ${{$offer_poster_merged['offer']->price}}</p>
                                    <p>Date  : {{$offer_poster_merged['offer']->date}}</p>
                                    <input type="submit" class="make-offer" value="Begin Chat">
                                </div>
                            </div>
                        </div>

                        </form>
                    @endforeach
                @endif

            </div>
        </div>
    </div>

</section>
@stop

@section('footer')

    <script>
        $(':button').click(function(){
            window.location.href='assigned-task';
        })
    </script>

@stop