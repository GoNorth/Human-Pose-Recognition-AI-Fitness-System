// app.js
// 云开发环境 ID：在微信公众平台开通云开发后，在控制台可查看并填写；不使用时留空即可
const env = '';

App({
  onLaunch() {
   if(!wx.cloud){
     console.error('请使用2.2.3或以上的基础库以使用云能力');
   }else{
     // 必须调用 init，云 API 才能使用；有 env 时指定环境，无则用项目默认
     wx.cloud.init(
       env ? { env, traceUser: true } : { traceUser: true }
     );
   }
  },
  globalData: {
      hasLogin: false,
      avatarUrl: null,
      nickName: "点击头像登录",
      openid: null,
      historyUpdate: false,
      infoUpdate: false,
      env: env  // 云开发环境 ID，供各页面 wx.cloud.database({ env }) 使用
  },
})
