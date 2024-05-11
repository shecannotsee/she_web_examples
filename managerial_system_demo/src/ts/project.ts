import { defineComponent , reactive , ref } from 'vue';
import type { projectInfo , queryByProjectName , queryByCount , queryByTime } from "@/ts/api/getProjectInfo"
import { getProjectInfo } from "@/ts/api/getProjectInfo"

const columns = [
  {
    title: '主机厂名',
    dataIndex: 'oe',
  },
  {
    title: 'tier1厂商名',
    dataIndex: 'tier1',
  },
  {
    title: '协议栈软件版本',
    dataIndex: 'vpsVersion',
  },
  {
    title: '硬件标识1',
    dataIndex: 'hardwareId',
  },
  {
    title: '创建时间',
    dataIndex: 'generationTime',
  },
  {
    title: '异常信息',
    dataIndex: 'exception',
  }
];

const projectName = ref<string>('');

const count = ref<number>(0);
let countUsing : boolean = false;

const startTime = ref<number>(0);
const endTime = ref<number>(0);
let timeUsing : boolean = false;

export  let pageData = reactive<{dataList:Array<projectInfo>}>({
  dataList: []
})

const getUserList = async () => {
  const nameQuery : queryByProjectName = {
    name : projectName.value
  }
  const countQuery : queryByCount = {
    using : countUsing,
    num : count.value
  }
  const timeQuery : queryByTime = {
    using : timeUsing,
    startTime : startTime.value,
    endTime : endTime.value
  }

  let ret : projectInfo[] = await getProjectInfo(nameQuery,countQuery,timeQuery);
  pageData.dataList = ret;
}

// TODO:需要实现多条件查询
const refreshData = () => {

}

const refreshDataByName = () => {
  getUserList()
}

const refreshDataByCount = () => {
  countUsing = true;
  timeUsing = false;
  getUserList()
}

const refreshDataByTime = () => {
  timeUsing = true;
  countUsing = false;
  getUserList()
}

export default defineComponent({
  setup() {
    return {
      columns,
      pageData,
      projectName,  // 项目名
      count,        // 查询条数
      startTime,    // 开始时间
      endTime,      // 结束时间
      refreshDataByName,  // 对应通过名称查找按钮
      refreshDataByCount, // 对应通过条数查找按钮
      refreshDataByTime,  // 对应通过时间查找按钮
      refreshData         // 对应多条件查询
    };
  }
});
