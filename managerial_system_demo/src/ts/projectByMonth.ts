import { defineComponent , reactive , ref } from 'vue';
import type { queryCriteria , applicationCount } from "@/ts/api/getApplicationCount"
import { getApplicationCount } from "@/ts/api/getApplicationCount"
const columns = [
  {
    title: '项目名',
    dataIndex: 'project',
  },
  {
    title: '本月申请成功数量',
    dataIndex: 'successCountInThisMonth',
  },
  {
    title: '本月申请失败数量',
    dataIndex: 'failedCountInThisMonth',
  },
  {
    title: '所有成功数量',
    dataIndex: 'allSuccessCount',
  },
  {
    title: '所有失败数量',
    dataIndex: 'allFailedCount',
  },
];
export  let pageData = reactive<{dataList:Array<applicationCount>}>({
  dataList: []
})

const inputYear = ref<number>(1990);
const inputMonth = ref<number>(1);

const getProjectByMonth = async () => {
  let condition: queryCriteria = {
    year: inputYear.value,
    month: inputMonth.value
  };
  let ret : applicationCount[] = await getApplicationCount(condition);
  pageData.dataList = ret;
}

const refreshData = () => {
  getProjectByMonth()
}

export default defineComponent({
  setup() {
    return {
      columns,
      pageData,
      inputYear,
      inputMonth,
      refreshData,
    };
  }
});
