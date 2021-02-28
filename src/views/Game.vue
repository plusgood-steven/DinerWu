<template>
  <el-row :gutter="10" style="width:100%">
    <el-col :span="6" v-for="o in 10" :key="o">
      <el-card :body-style="{ padding: '20px' }" shadow="hover" class="box-card" @click="testclick()" style="cursor: pointer;">
        <img
          src="https://previews.123rf.com/images/viktorijareut/viktorijareut1501/viktorijareut150100067/36000467-illustration-of-game-game-icons-video-game-icon-play-icon-game-console.jpg"
          class="image"
        />
        <div style="padding: 14px;">
          <h1>遊戲</h1>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click.stop>詳細玩法</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  setup() {
    const testclick = function() {
      window.open("http://140.118.127.179/BoardGame/sicbo/");
    };

    return {
      testclick,
    };
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  method: {},
};
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
