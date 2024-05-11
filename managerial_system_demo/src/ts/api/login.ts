import axios from 'axios';
import baseUrl from "@/ts/api/url"

export type { login };
export { getLoginStatus , getToken };

interface login {
  name : string;
  password : string;
  token : string;
};

async function getLoginStatus(loginInfo: login): Promise<string> {
  try {
    const response = await axios.post(baseUrl + '/login', {
      req : {
        type : 1,
        name : loginInfo.name,
        passwd : loginInfo.password
      }
    });
    console.log("getPassword response:", response);

    // 根据实际接口返回的数据结构，获取密码并返回
    const success = response.data.rsp.ret;
    return success;
  } catch (error) {
    console.log("getPassword error:", error);
    // 处理请求失败的情况，例如抛出异常或返回默认密码
    throw new Error("Failed to get password");
  }
}


function getToken(userName : string) : string {

  const ret : login = {
    name : "",
    password : "123456",
    token : ""
  }

  return ret.token;
};

