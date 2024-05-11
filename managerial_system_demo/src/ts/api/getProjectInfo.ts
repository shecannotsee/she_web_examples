import axios from 'axios';
import AxiosResponse from 'axios';
import baseUrl from "@/ts/api/url"

export type { projectInfo };
export type { queryByProjectName , queryByCount , queryByTime };
export { getProjectInfo };

interface queryByProjectName {
  name : string
}

interface queryByCount {
  using : boolean,
  num : number
}

interface queryByTime {
  using : boolean,
  startTime : number,
  endTime : number
}

interface projectInfo {
  oe : string,
  tier1 : string,
  vpsVersion : string,
  hardwareId : string,
  generationTime : string,
  exception : string
}

async function getProjectInfo ( name:queryByProjectName,
                                count : queryByCount,
                                time :queryByTime 
                              ) : Promise<projectInfo[]> {
  try {
    let response;
    if (count.using === true) {
      console.log("request body:",{
        req : {
          type : 3,
          project : name.name,
          subtype : 2,
          dataTypes : 1,
          count : count.num
        }
      });
      response = await axios.post(baseUrl + '/manage/getProjectInfo', {
        req : {
          type : 3,
          project : name.name,
          subtype : 2,
          dataTypes : 1,
          count : count.num
        }
      },{
        headers: {
          'Authorization': 'Bearer' // 替换 token 为你的实际 token 值
        }
      });
    } else if ( time.using === true ) {
      console.log("request body:",{
        req : {
          type : 3,
          project : name.name,
          subtype : 3,
          dataTypes : 1,
          startTime : time.startTime,
          endTime : time.endTime
        }
      });
      response = await axios.post(baseUrl + '/manage/getProjectInfo', {
        req : {
          type : 3,
          project : name.name,
          subtype : 3,
          dataTypes : 1,
          startTime : time.startTime,
          endTime : time.endTime
        }
      },{
        headers: {
          'Authorization': 'Bearer' // 替换 token 为你的实际 token 值
        }
      });
    } else {
      console.log("request body:",{
        req : {
          type : 3,
          project : name.name,
          subtype : 1,
          dataTypes : 1
        }
      });
      response = await axios.post(baseUrl + '/manage/getProjectInfo', {
        req : {
          type : 3,
          project : name.name,
          subtype : 1,
          dataTypes : 1
        }
      },{
        headers: {
          'Authorization': 'Bearer' // 替换 token 为你的实际 token 值
        }
      });
    }

    // 根据实际接口返回的数据结构，获取并返回
    console.log("getApplicationCount response:", response);
    const ret = response.data.rsp.data;
    return ret;
  }catch (error) {
    console.log("getUser error:", error);
    // 处理请求失败的情况，例如抛出异常或返回默认密码
    throw new Error("Failed to getUser");
  }
}

