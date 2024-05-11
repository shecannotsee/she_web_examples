import { defineComponent ,reactive } from 'vue';
import type { user } from "@/ts/api/getUser"
import { getUser } from "@/ts/api/getUser"
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
  {
    title: '标签',
    dataIndex: 'tags',
  },
];
export  let pageData = reactive<{dataList:Array<user>}>({
  dataList: []
})

const getUserList = async () => {
  let ret : user[] = await getUser();
  pageData.dataList = ret;
}

const refreshData = () => {
  getUserList()
}

export default defineComponent({
  setup() {
    return {
      columns,
      pageData,
      getUserList,
      refreshData
    };
  }
});
