const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    visible: false,
    oVisible : false,

    catItems: [
      {
        id: 1,
        num: 1,
        price: 123,
        tags: ['大杯', '加热', '中杯'],
        name: '武宣姜酸33'
      },
      {
        id: 12,
        num: 1,
        price: 123,
        tags: ['大杯', '加热', '中杯'],
        name: '武宣姜酸22'
      },
      {
        id: 13,
        num: 1,
        price: 123,
        tags: ['大杯', '加热', '中杯'],
        name: '武宣姜酸11'
      }
    ],

       list : [
          {
            id : 1,
            title : '某某',
            url: '/static/images/pr-1.jpg',
            is_hot:false,
            is_new:false,
            sale : 1,
            price : 1,
            prom_price : 3,
            attr : {},
          },
         {
           id: 2,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         },
         {
           id: 21,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         },
         {
           id: 22,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         },
         {
           id: 23,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         },
         {
           id: 42,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         },
         {
           id: 24,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         },
         {
           id: 25,
           title: '某某',
           url: '/static/images/pr-2.jpg',
           is_hot: false,
           is_new: false,
           sale: 1,
           price: 1,
           prom_price: 3,
           attr: {},
         }
       ],
       category : [
           {
             id : 1,
             title : '分类1'
           },
         {
           id: 2,
           title: '分类12'
         },
         {
           id: 3,
           title: '分类13'
         }
       ]
  },





  // 搜索
  handleSearch : function( e ){
    console.log('e.detail.value---', e.detail.value )
  },



 // 关闭弹出
  handleclose : function(){
         this.setData({
           visible : false,
         })
  },



  showModal : function(){
      this.setData({
          visible : true
      })
 },



// 显示订单列表
  showOrderList : function(){
      this.setData({
            oVisible : true
      })
  },

// 隐藏订单列表
  closeOrderList : function(){
    this.setData({
      oVisible: false
    })
  },






  /**a
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})