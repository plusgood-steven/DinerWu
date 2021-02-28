<template>
  <el-card :body-style="{ padding: '20px' }" shadow="hover" class="box-card" style="cursor: pointer;">
    <img :src="item.image" class="image" />
    <div style="padding: 14px;">
      <h1 style="font-weight: bold;">{{ item.name }}</h1>
      <div class="bottom">
        <time class="time">價格 : {{ item.price }} 元</time>
        <el-button type="text" class="button" @click.stop>詳細資訊</el-button>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "menuItemCard",
  props: {
    item: {
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  font-size: 18px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
}
.box-card {
  width: 95%;
  height: 100%;
  margin: 20px auto;
}
</style>
