// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       orders : [
            {
              id : 1,
               url :'',
               price : 12,
               paid : false,
               total : 2,
               name : '武宣马步农家老谭姜酸[无任何色素、添加剂]',
               tags :[
                  '打分',
                   '狗屎',
               ]
            },
         {
           id: 12,
           url: '',
           price: 12,
           total: 2,
           paid: false,
           name: '武宣马步农家老谭姜酸[无任何色素、添加剂]',
           attrs: [
             '打分',
             '狗屎',
           ]
         },
         {
           id: 32,
           url: '',
           price: 12,
           total: 2,
           paid: true,
           name: '1武宣马步农家老谭姜酸[无任何色素、添加剂]',
           tags: [
             '打分',
             '狗屎',
           ]
         },
         {
           id: 41,
           url: '',
           price: 12,
           total: 2,
           paid: false,
           name: '武宣马步农家老谭姜酸[无任何色素、添加剂]',
           tags: [
             '打分',
             '狗屎',
           ]
         }
       ]
  },

  /**
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