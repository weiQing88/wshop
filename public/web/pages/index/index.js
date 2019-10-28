//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     motto: 'Hello World',
     userInfo: {},
     hasUserInfo: false,
    navigation : [
         {
          id : '123124',
          title : '自酿酒',
          url: '/static/images/jiu.png',
          link: '/pages/list/list?cid=123&title=自酿酒',
         },
       {
         id: '5432',
         title: '粮油',
         url: '/static/images/liangyou.png',
         link: '',
       },
       {
         id: '345',
         title: '农家土货',
         url: '/static/images/nongchan.png',
         link: '',
       },
       {
         id: '543211',
         title: '酸野',
         url: '/static/images/suan.png',
         link: '',
       },
      {
        id: '884432',
        title: '我的积分',
        url: '/static/images/jifen.png',
        link: '',
      },
      {
        id: '66534',
        title: '积分商城',
        url: '/static/images/jifenshangc.png',
        link: '',
      },
     ],
     banners : [
         {
           id : '31231',
           text : 'banner--1',
          url: '/static/images/mango-1.jpg',
         },
       {
         id: '3234235',
         text: 'banner--2',
         url: '/static/images/mango-2.png',
       },
       {
         id: '65323',
         text: 'banner--3',
         url: '/static/images/mango-3.jpg',
       },
       {
         id: '65323',
         text: 'banner--3',
         url: '/static/images/mango-4.jpg',
       }
     ]
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  onLoad: function () {

    if (app.globalData.userInfo ){
          this.setData({
             userInfo: app.globalData.userInfo
          })
    }

  },


 // 点击打开授权
 openAuhto : e => {
   wx.redirectTo({
     url: '/pages/authorize/authorize'
   })
 }



})
