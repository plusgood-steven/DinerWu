<template>
  <el-row :gutter="10" style="width:100%">
    <el-col :span="6" v-for="(item, index) in menuList" :key="index">
      <el-card :body-style="{ padding: '20px' }" shadow="hover" class="box-card" @click="testclick()" style="cursor: pointer;">
        <img src="../assets/picture/noodle.webp" class="image" />
        <div style="padding: 14px;">
          <h1>{{ item.name }}</h1>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click.stop>詳細玩法</el-button>
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
}
export default defineComponent({
  name: "Menu",
  setup() {
    const testclick = function() {
      window.open("http://140.118.127.179/BoardGame/sicbo/");
    };

    return {
      testclick,
    };
  },
  data() {
    const menuList: Array<MenuItem> = [
      {
        imagePath: "../assets/picture/GlutinousRice.webp",
        name: "爌肉飯",
      },
      {
        imagePath: "../assets/picture/noodle.webp",
        name: "炒麵",
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
  font-size: 13px;
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
