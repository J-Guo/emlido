<!-- Show review stars based on User or Affiliate Average Rate -->

@if($rate <= 1)
<!-- Average Rate From 0 to 1 -->
<div id="rating" title="rating" style="cursor: default;">
    <img id="fixed_1-1" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="1">&nbsp;
    <img id="fixed_1-2" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="2">&nbsp;
    <img id="fixed_1-3" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="3">&nbsp;
    <img id="fixed_1-4" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="4">&nbsp;
    <img id="fixed_1-5" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="5">
</div>
@elseif($rate <= 2)
<!-- Average Rate From 1 to 2 -->
<div id="rating" title="rating" style="cursor: default;">
    <img id="fixed_1-1" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="1">&nbsp;
    <img id="fixed_1-2" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="2">&nbsp;
    <img id="fixed_1-3" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="3">&nbsp;
    <img id="fixed_1-4" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="4">&nbsp;
    <img id="fixed_1-5" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="5">
</div>
@elseif($rate <= 3)
<div id="rating" title="rating" style="cursor: default;">
    <img id="fixed_1-1" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="1">&nbsp;
    <img id="fixed_1-2" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="2">&nbsp;
    <img id="fixed_1-3" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="3">&nbsp;
    <img id="fixed_1-4" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="4">&nbsp;
    <img id="fixed_1-5" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="5">
</div>
@elseif($rate <= 4)
<div id="rating" title="rating" style="cursor: default;">
    <img id="fixed_1-1" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="1">&nbsp;
    <img id="fixed_1-2" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="2">&nbsp;
    <img id="fixed_1-3" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="3">&nbsp;
    <img id="fixed_1-4" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="4">&nbsp;
    <img id="fixed_1-5" src="{{asset('assets/Frontend/img/star-off.png')}}" alt="5">
</div>
@elseif($rate <= 5)
<div id="rating" title="rating" style="cursor: default;">
    <img id="fixed_1-1" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="1">&nbsp;
    <img id="fixed_1-2" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="2">&nbsp;
    <img id="fixed_1-3" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="3">&nbsp;
    <img id="fixed_1-4" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="4">&nbsp;
    <img id="fixed_1-5" src="{{asset('assets/Frontend/img/star-on.png')}}" alt="5">
</div>
@endif
