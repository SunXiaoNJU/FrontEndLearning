<template>
  <div>
    <h2>登录</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">邮箱：</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <button :disabled="isSubmitting">
        {{ isSubmitting ? "登录中..." : "登录" }}
      </button>
    </form>

    <h2>注册</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <div v-if="errorMessage">{{ errorMessage }}</div>
      <button :disabled="isSubmitting">
        {{ isSubmitting ? "注册中..." : "注册" }}
      </button>
    </form>
  </div>
</template>

<script>
import useLoginForm from "./useLoginForm";
import useRegisterForm from "./useRegisterForm";

export default {
  setup() {
    const loginForm = useLoginForm();
    const registerForm = useRegisterForm();

    const onSubmit = (event) => {
      event.preventDefault();
    };

    return {
      loginForm,
      registerForm,
      onSubmit,
    };
  },
};
</script>
