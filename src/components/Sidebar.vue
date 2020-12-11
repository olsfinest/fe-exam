<template>

    <b-col sm="3" class="pull-right">
        <h2 class="title">CASINO REVIEWS</h2>
        <ul class="sidebar-link">
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
        </ul>
       
        <h2 class="title">LATEST NEWS</h2>
        <ul class="sidebar-link">
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
ectetur adipiscing elit.</a></li>
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
ectetur adipiscing elit.</a></li>
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
            ectetur adipiscing elit.</a></li>
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
            ectetur adipiscing elit.</a></li>
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
            ectetur adipiscing elit.</a></li>
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
            ectetur adipiscing elit.</a></li>
            <li><a href="#" class="navbar3">Lorem ipsum dolor sit amet, cons
            ectetur adipiscing elit.</a></li>
        </ul>
       
        <h2 class="title">POKER REVIEWS</h2>
        <ul class="sidebar-link">
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
            <li><a href="#" class="navbar3">Any Casino Poker Link</a></li>
        </ul>
    </b-col>

</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
    h2.title {
        background:url('../assets/images/casino-reviews.jpg') repeat-x;
        font-family: Arial;
        font-size: 13px;
        font-weight: bold;
        color: #FFF;
        padding-left: 18px;
        padding-top: 15px;
        padding-bottom: 13px;
    }

    .sidebar-link li a {
        font-size: 12px;
        font-weight: none;
        text-decoration: none;
        color: #FFF;
    }

    .sidebar-link li {
        list-style: none;
        border-bottom: 1px solid #212121;
        padding-bottom: 5px;
        background: url(/img/arrow.064d8624.jpg) no-repeat;
        background-position: 11px center;
        padding-left: 40px;
        padding-right: 20px;
    }

    .sidebar-link {
        padding:0;
    }

</style>