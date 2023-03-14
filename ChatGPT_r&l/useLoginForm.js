import { ref } from "vue";

export default function useLoginForm() {
  const email = ref("");
  const password = ref("");
  const isSubmitting = ref(false);
  const errorMessage = ref(null);

  const submit = async () => {
    errorMessage.value = null;
    isSubmitting.value = true;

    try {
      // 进行登录操作
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isSubmitting.value = false;
    }
  };

  const validate = () => {
    if (!email.value.trim()) {
      errorMessage.value = "请输入邮箱地址";
      return false;
    }

    if (!password.value.trim()) {
      errorMessage.value = "请输入密码";
      return false;
    }

    return true;
  };

  return {
    email,
    password,
    isSubmitting,
    errorMessage,
    submit,
    validate,
  };
}