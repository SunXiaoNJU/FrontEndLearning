# Register && Login

## 创建登录函数

首先，我们创建一个名为 useLoginForm 的组合式函数，用于处理登录表单的状态和逻辑。这个函数将返回一个包含表单数据、表单验证和登录方法的对象。

在这个组合式函数中，我们使用 ref 创建了几个响应式变量，用于存储表单数据、是否正在提交、错误信息等状态。submit 方法用于提交表单，validate 方法用于验证表单数据是否有效。在 submit 方法中，我们首先将 errorMessage 设为 null，将 isSubmitting 设为 true，然后尝试进行登录操作，如果出现错误，则将错误信息存储到 errorMessage 中，最后将 isSubmitting 设为 false。

## 创建注册函数

接下来，我们创建一个名为 useRegisterForm 的组合式函数，用于处理注册表单的状态和逻辑。这个函数将返回一个包含表单数据、表单验证和注册方法的对象。

在这个组合式函数中，我们使用 ref 创建了几个响应式变量，用于存储表单数据、是否正在提交、错误信息等状态。submit 方法用于提交表单，validate 方法用于验证表单数据是否有效。在 submit 方法中，我们首先将 errorMessage 设为 null，将 isSubmitting 设为 true，然后尝试进行注册操作，如果出现错误，则将错误信息存储到 errorMessage 中，最后将 isSubmitting 设为 false。

## 创建登录和注册页面

在这个页面中，我们使用 useLoginForm 和 useRegisterForm 分别创建了处理登录和注册表单的两个组合式函数。然后我们在模板中使用了 v-model 绑定表单数据，使用 v-if 来显示错误信息，使用 :disabled 来禁用按钮，最后在 setup 函数中将表单和提交方法传递给模板。当用户提交表单时，我们阻止默认的提交行为，并在表单组合式函数中调用相应的提交方法进行处理。
