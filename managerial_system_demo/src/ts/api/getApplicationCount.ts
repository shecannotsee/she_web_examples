import axios from 'axios';
import baseUrl from "@/ts/api/url"

export type { queryCriteria , applicationCount };
export { getApplicationCount }; // function

interface queryCriteria {
  year : number,
  month : number
}

interface applicationCount {
  project : string,
  successCountInThisMonth : string,
  failedCountInThisMonth : string,
  allSuccessCount : string,
  allFailedCount : string
}

async function getApplicationCount( param:queryCriteria ) :Promise<applicationCount[]> {
  try {
    const response = await axios.post(baseUrl + '/manage/getApplicationCount', {
      req : {
        type : 4,
        year : param.year,
        month : param.month
      }
    },{
      headers: {
        'Authorization': 'Bearer' // 替换 token 为你的实际 token 值
      }
    });
    console.log("getApplicationCount response:", response);

    // 根据实际接口返回的数据结构，获取并返回
    const ret = response.data.rsp.data;
    return ret;
  }catch (error) {
    console.log("getUser error:", error);
    // 处理请求失败的情况，例如抛出异常或返回默认密码
    throw new Error("Failed to getUser");
  }
}

