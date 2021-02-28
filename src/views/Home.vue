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
      <el-menu-item index="Game">Game</el-menu-item>
      <el-menu-item index="2-2">選項2</el-menu-item>
      <el-menu-item index="2-3">選項3</el-menu-item>
      <el-submenu index="2-4">
        <template #title>選項4</template>
        <el-menu-item index="2-4-1">選項1</el-menu-item>
        <el-menu-item index="2-4-2">選項2</el-menu-item>
        <el-menu-item index="2-4-3">選項3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="News" style="width:150px">消息中心</el-menu-item>
    <el-menu-item index="About" style="width:150px">關於</el-menu-item>
  </el-menu>
  <router-view />
  <div v-if="route.path === `/`">
    <img
      src="https://previews.123rf.com/images/viktorijareut/viktorijareut1501/viktorijareut150100067/36000467-illustration-of-game-game-icons-video-game-icon-play-icon-game-console.jpg"
      class="image"
    />
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
      if (key === "Game") this.router.push("/game");
    },
  },
});
</script>

<style scoped>
.image {
  width: 100%;
  display: block;
}
</style>
