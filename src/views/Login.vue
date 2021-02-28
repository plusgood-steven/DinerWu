<template>
  <h1 class="cc">登入</h1>
  <div class="cc">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="UserName :" placeholder="Username">
        <el-input v-model="form.userName" placeholder="請輸入帳號">
          <template #prefix>
            <i class="el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="PassWord :">
        <el-input v-model="form.passWord" show-password placeholder="請輸入密碼">
          <template #prefix>
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit()" style="position:relative;left:30%;top:30px">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
interface User {
  userName: string;
  passWord: string;
}
export default defineComponent({
  name: "Login",
  components: {
    // UserOutlined,
    // LockOutlined,
  },
  setup() {
    const store = useStore();
    const state = store.state;
    const isLogin = computed(() => state.isLogin);
    return {
      state,
      isLogin,
      store,
    };
  },
  data() {
    return {
      form: { passWord: "", userName: "" },
    };
  },
  methods: {
    handleSubmit() {
      if (!(this.form.passWord === "" || this.form.userName === ""))
        fetch("http://localhost:3000/users/auth", {
          method: "POST",
          body: JSON.stringify({
            userName: this.form.userName,
            passWord: this.form.passWord,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.info) {
              this.store.commit("changeisLogin", true);
              this.$router.push("/");
            } else {
              ElMessage.error("帳號密碼有誤 !");
              this.form.userName = "";
              this.form.passWord = "";
            }
          })
          .catch(() => {
            ElMessage.error("系統出現錯誤 !");
          });
      else
        ElMessage.warning({
          message: "帳號或密碼尚未輸入",
          type: "warning",
        });
    },
  },
});
</script>

<style scoped>
.cc {
  margin: auto;
  position: relative;
  padding: 50px 0 30px 0;
  width: 50%;
}
</style>
