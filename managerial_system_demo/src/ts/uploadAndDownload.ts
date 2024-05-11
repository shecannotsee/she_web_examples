import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam } from 'ant-design-vue';
import { defineComponent } from 'vue';

const handleChange = (info: UploadChangeParam) => {
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`);
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};

const fileList = ref([]);
const headers = {
  authorization: 'authorization-text',
};

export default defineComponent({
    // 组件的其余部分
    setup() {
      // 在此处可以使用从外部文件导入的变量和函数
      return {
        handleChange,
        fileList,
        headers,
      };
    },
    methods: {
      downloadFile() {
        // 在这里执行文件下载操作
        // 可以使用浏览器的下载功能或发送请求到后端以获取文件
        // 例如，使用 window.open() 下载或使用 Axios 发送 GET 请求获取文件
      },
    }
  });
