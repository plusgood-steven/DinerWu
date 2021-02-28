<template>
  <div class="about">
    <span class="fontstyle">地理位置</span>
  </div>
  <GoogleMap api-key="AIzaSyA5N7UHT6_K-STVcwug9tBd0eku_JzV7sg" style="width: 100%; height: 600px" :center="center" :zoom="17">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 24.11341, lng: 120.683753 };
    return { center };
  },
};
</script>

<style scoped>
.fontstyle {
  font-size: 50px;
  color: #999;
  font-weight: bolder;
}

.about {
  padding: 30px;
}
</style>
