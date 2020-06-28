<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide :style="{'background-image': 'url(' + bannerimg +')'}">
        <h1>First slide</h1>
        <div class="s-info">
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </div>
      </b-carousel-slide>
      <b-carousel-slide :style="{'background-image': 'url(' + bannerimg2 +')'}">
        <h1>Blank Image</h1>
        <div class="s-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import bannerimg from '@/assets/banner.jpg'
import bannerimg2 from '@/assets/banner2.jpg'
export default {
    data(){
        return{
            bannerimg : bannerimg,
            bannerimg2 : bannerimg2
        }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style lang="scss">
#carousel-1{
  .carousel-item{
    height: calc(100vh - 56px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active{
      z-index: 11;
    }
    .carousel-caption{
      top:50%;
      bottom:auto;
      -moz-transform: translate(0,-50%);
      -webkit-transform: translate(0,-50%);
      -o-transform: translate(0,-50%);
      -ms-transform: translate(0,-50%);
      transform: translate(0,-50%);
      h1{
        color: #fff;
        font-size: 5rem;
      }
      .s-info{
        font-size: 2.5rem;
      }
    }
  }
  .carousel-control-prev,.carousel-control-next{
    z-index: 12;
  }
}
</style>