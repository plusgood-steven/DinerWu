<template>
  <div style="height:30px" />
  <span class="menufont">主食</span>
  <el-divider></el-divider>
  <el-row style="width:100%" type="flex" justify="center">
    <el-col :lg="6" :md="8" :sm="12" :xs="16" v-for="(item, index) in MainmealList" :key="index">
      <menu-item-card :item="item" />
    </el-col>
  </el-row>
  <div style="height:30px" />
  <span class="menufont">湯品</span>
  <el-divider></el-divider>
  <el-row style="width:100%" type="flex" justify="center">
    <el-col :lg="6" :md="8" :sm="12" :xs="16" v-for="(item, index) in SoupList" :key="index">
      <menu-item-card :item="item" />
    </el-col>
  </el-row>
  <div style="height:30px" />
  <span class="menufont">小菜</span>
  <el-divider></el-divider>
  <el-row style="width:100%" type="flex" justify="center">
    <el-col :lg="6" :md="8" :sm="12" :xs="16" v-for="(item, index) in SideDishList" :key="index">
      <menu-item-card :item="item" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MainmealList, SoupList, SideDishList } from "@/data/menuItem";
import menuItemCard from "@/components/menuItemCard.vue";

export default defineComponent({
  name: "Menu",
  components: {
    menuItemCard,
  },
  setup() {
    return {};
  },
  data() {
    return {
      currentDate: new Date(),
      MainmealList,
      SoupList,
      SideDishList,
    };
  },
  method: {},
});
</script>

<style scoped>
.menufont {
  font-size: 50px;
  font-weight: bold;
  height: 100px;
}
</style>
