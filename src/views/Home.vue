<template>
  <el-menu
    :default-active="route.name"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="Blank" style="width:50px"></el-menu-item>
    <el-menu-item index="Home" style="width:150px">首頁</el-menu-item>
    <el-menu-item index="Menu" style="width:150px">菜單</el-menu-item>
    <el-menu-item index="Info" style="width:150px">消息中心</el-menu-item>
    <el-menu-item index="About" style="width:150px">關於</el-menu-item>
  </el-menu>
  <router-view />
  <div v-if="route.path === `/`">
    <el-carousel height="800px">
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
      console.log(key, keyPath, this.route.name);
      if (key === "Home") this.router.push("/");
      if (key === "About") this.router.push("/about");
      if (key === "Menu") this.router.push("/menu");
      if (key === "Info") this.router.push("/info");
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
