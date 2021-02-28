<template>
  <el-row :gutter="10" style="width:100%">
    <el-col :span="6" v-for="(item, index) in menuList" :key="index">
      <el-card :body-style="{ padding: '20px' }" shadow="hover" class="box-card" style="cursor: pointer;">
        <img :src="item.imagePath" class="image" />
        <div style="padding: 14px;">
          <h1>{{ item.name }}</h1>
          <div class="bottom">
            <time class="time">價格 : {{ item.price }} 元</time>
            <el-button type="text" class="button" @click.stop>詳細資訊</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface MenuItem {
  imagePath: string;
  name: string;
  price: number;
}
export default defineComponent({
  name: "Menu",
  setup() {
    return {};
  },
  data() {
    const menuList: Array<MenuItem> = [
      {
        imagePath: "../assets/picture/GlutinousRice.webp",
        name: "爌肉飯",
        price: 50,
      },
      {
        imagePath: "../assets/picture/noodle.webp",
        name: "炒麵",
        price: 20,
      },
    ];
    return {
      currentDate: new Date(),
      menuList,
    };
  },
  method: {},
});
</script>

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
  display: block;
}

.box-card {
  width: 90%;
  margin: 20px auto;
}
</style>
