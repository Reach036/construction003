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
          style: "mapbox://styles/mapbox/dark-v10",
          center: [137.9150899566626, 36.25956997955441],
          zoom: 5,
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

        map.on('load', function() {
          // Add a geojson point source.
          // Heatmap layers also work with a vector tile source.
          map.addSource('earthquakes', {
            "type": "geojson",
            "data": "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          });

          map.addLayer({
            "id": "earthquakes-heat",
            "type": "heatmap",
            "source": "earthquakes",
            "maxzoom": 9,
            "paint": {
              // Increase the heatmap weight based on frequency and property magnitude
              "heatmap-weight": [
                "interpolate",
                ["linear"],
                ["get", "mag"],
                0, 0,
                6, 1
              ],
              // Increase the heatmap color weight weight by zoom level
              // heatmap-intensity is a multiplier on top of heatmap-weight
              "heatmap-intensity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 1,
                9, 3
              ],
              // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
              // Begin color ramp at 0-stop with a 0-transparancy color
              // to create a blur-like effect.
              "heatmap-color": [
                "interpolate",
                ["linear"],
                ["heatmap-density"],
                0, "rgba(33,102,172,0)",
                0.2, "rgb(103,169,207)",
                0.4, "rgb(209,229,240)",
                0.6, "rgb(253,219,199)",
                0.8, "rgb(239,138,98)",
                1, "rgb(178,24,43)"
              ],
              // Adjust the heatmap radius by zoom level
              "heatmap-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 2,
                9, 20
              ],
              // Transition from heatmap to circle layer by zoom level
              "heatmap-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                7, 1,
                9, 0
              ],
            }
          }, 'waterway-label');

          map.addLayer({
            "id": "earthquakes-point",
            "type": "circle",
            "source": "earthquakes",
            "minzoom": 7,
            "paint": {
              // Size circle radius by earthquake magnitude and zoom level
              "circle-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                7, [
                  "interpolate",
                  ["linear"],
                  ["get", "mag"],
                  1, 1,
                  6, 4
                ],
                16, [
                  "interpolate",
                  ["linear"],
                  ["get", "mag"],
                  1, 5,
                  6, 50
                ]
              ],
              // Color circle by earthquake magnitude
              "circle-color": [
                "interpolate",
                ["linear"],
                ["get", "mag"],
                1, "rgba(33,102,172,0)",
                2, "rgb(103,169,207)",
                3, "rgb(209,229,240)",
                4, "rgb(253,219,199)",
                5, "rgb(239,138,98)",
                6, "rgb(178,24,43)"
              ],
              "circle-stroke-color": "white",
              "circle-stroke-width": 1,
              // Transition from heatmap to circle layer by zoom level
              "circle-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                7, 0,
                8, 1
              ]
            }
          }, 'waterway-label');
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
