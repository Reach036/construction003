<!-- mapbox -->
<template>
  <div id="body">
    <div id="map"></div>
  </div>

</template>

<script>
  import '../../static/css/mapbox-gl.css';
  export default {
    data() {
      return {};
    },
    components: {},
    created() {},
    mounted() {
      this.initmap();
    },
    computed: {},
    methods: {
      initmap() {
        this.$mapboxgl.accessToken =
          "pk.eyJ1IjoicmVhY2gwMzYiLCJhIjoiY2p3ZzBhcGhxMTJsajQ1bzN3azVmaHQ5dCJ9.BoGnn7lsExEdxr6F0viGmw";
        var map = new this.$mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g',
          center: [137.9150899566626, 36.25956997955441],
          zoom: 5,
          background_opacity: 0,
          // pitch: 60, //视野倾斜，0-60
          // bearing: -17.6,//视野旋转角度
        });

        //注册点击事件
        map.on("click", function(e) {
          console.log("点击");
        });

        map.addControl(new this.$mapboxgl.ScaleControl({
          maxWidth: 80,
          unit: 'metric'
        }));
        map.addControl(new this.$mapboxgl.FullscreenControl());
        map.addControl(new this.$mapboxgl.NavigationControl());

        map.on('load', function () {
          map.addSource('dem', {
            "type": "raster-dem",
            "url": "mapbox://mapbox.terrain-rgb"
          });
          map.addLayer({
            "id": "hillshading",
            "source": "dem",
            "type": "hillshade"
          }, 'waterway-river-canal-shadow');
        });
      }
    }
  };
</script>

<style lang="scss">
  #body {
    width:auto;
    height:auto;
    margin:0;
    padding: 0;
    max-height:879px;
  }
  #map {
    width:auto;
    height:874px;
  }



</style>
