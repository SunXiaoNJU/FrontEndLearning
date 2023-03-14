import { ref } from "vue";

export default function useRegisterForm() {
  const name = ref("");
  const email = ref("");
  const password = ref("");
  const isSubmitting = ref(false);
  const errorMessage = ref(null);

  const submit = async () => {
    errorMessage.value = null;
    isSubmitting.value = true;

    try {
      // 进行注册操作
    } catch (error) {
      errorMessage.value = error.message;
    } finally {
      isSubmitting.value = false;
    }
  };

  const validate = () => {
    if (!name.value.trim()) {
      errorMessage.value = "请输入姓名";
      return false;
    }

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
    name,
    email,
    password,
    isSubmitting,
    errorMessage,
    submit,
    validate,
  };
}
