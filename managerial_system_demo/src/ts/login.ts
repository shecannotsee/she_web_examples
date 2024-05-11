import { defineComponent, reactive, getCurrentInstance } from 'vue';
import type { login } from "@/ts/api/login"
import {getLoginStatus, getToken} from "@/ts/api/login"
import type { Router } from "vue-router";

console.log("login.vue");
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });

    const currentInstance = getCurrentInstance();
    const router = currentInstance?.appContext.config.globalProperties.$router as Router;

    const onFinish = async (values: any, route : any ) => {
      console.log('Success:', values);
      try {
        const input : login = {
          name : formState.username,
          password : formState.password,
          token : ""
        }
        const success : number | string = await getLoginStatus(input);
        console.log("input userName: ", formState.username);
        console.log("input password: ", formState.password);

        console.log('Success:', success);
        if (success == "0") {
          console.log('Success:', values);
          router.push('/manage');
        } else {
          alert("账号或者密码错误");
          console.log("账号或者密码错误");
        }
      } catch (error) {
        console.log("Failed to get password:", error);
        // 处理获取密码失败的情况，例如弹出错误提示
        alert("获取密码失败");
      }
    };

    const onFinishFailed = (errorInfo: any) => {
      alert("请输入账号和密码");
      console.log('Failed:', errorInfo);
    };
    
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});