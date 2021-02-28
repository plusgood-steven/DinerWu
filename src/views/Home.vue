<template>
  <el-menu
    :default-active="'Home'"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="Blank" style="width:50px"></el-menu-item>
    <el-menu-item index="Home" style="width:150px">首頁</el-menu-item>
    <el-submenu index="Platform" style="width:150px">
      <template #title>平台</template>
      <el-menu-item index="Menu">菜單</el-menu-item>
    </el-submenu>
    <el-menu-item index="News" style="width:150px">消息中心</el-menu-item>
    <el-menu-item index="About" style="width:150px">關於</el-menu-item>
  </el-menu>
  <router-view />
  <div v-if="route.path === `/`">
    <el-carousel height="600px">
      <el-carousel-item v-for="Image in MainPicture" :key="Image">
        <img :src="Image.path" class="image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = store.state;
    const isLogin = computed(() => state.isLogin);
    return {
      state,
      isLogin,
      store,
      router,
      route,
    };
  },
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath, this.route.path);
      if (key === "Home") this.router.push("/");
      if (key === "About") this.router.push("/about");
      if (key === "Menu") this.router.push("/menu");
    },
  },
  data() {
    const MainPicture = [
      {
        path: require("@/assets/picture/mainPicture.jpg"),
      },
      {
        path: require("@/assets/picture/menu.webp"),
      },
      {
        path: require("@/assets/picture/Set.webp"),
      },
    ];
    return {
      MainPicture,
    };
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
