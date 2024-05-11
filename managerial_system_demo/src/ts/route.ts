import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import home           from "@/view/home.vue"
import login          from "@/view/login.vue"
import manage         from "@/view/manage.vue"
import manageHome     from "@/view/manageHome.vue"
import timeAndDate    from "@/view/timeAndDate.vue"
import query          from "@/view/query.vue"
import setting        from "@/view/setting.vue"
import user           from "@/view/user.vue"
import project        from "@/view/project.vue"
import projectByMonth from "@/view/projectByMonth.vue"
import uploadAndDownload from "@/view/uploadAndDownload.vue"

export { router };

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      name:"App",
      redirect:"/home"
    },
    {
      path:"/home",
      name: "home",
      component:home
    },
    {
      path:"/login",
      name: "login",
      component:login
    },
    {
      path:"/manage",
      name:"manage",
      component:manage,
      redirect:"/manage/home",
      beforeEnter: (to, from, next) => {
        // TOOD:需要添加登录状态的检查方法,通常使用token来配合使用
        const isLoggedIn = true; // 检查用户是否已登录
        if (!isLoggedIn) {
          // 如果用户未登录，则进行拦截
          next("/login"); // 跳转到登录页面或其他处理
          console.log("geiwo huiqu denglu");
        } else {
          // 允许继续访问路由
          next();
        }
      },
      children:[
        {
          path:"/manage/home",
          name:"manageHome",
          component:manageHome
        },
        {
          path:"/manage/timeAndDate",
          name:"timeAndDate",
          component:timeAndDate
        },
        {
          path:"/manage/query",
          name:"query",
          component:query
        },
        {
          path:"/manage/setting",
          name:"setting",
          component:setting
        },
        {
          path:"/manage/user",
          name:"user",
          component:user
        },
        {
          path:"/manage/project",
          name:"project",
          component:project
        },
        {
          path:"/manage/projectByMonth",
          name:"projectByMonth",
          component:projectByMonth
        },
        {
          path:"/manage/uploadAndDownload",
          name:"uploadAndDownload",
          component:uploadAndDownload
        }

      ]
    }
  ]
});