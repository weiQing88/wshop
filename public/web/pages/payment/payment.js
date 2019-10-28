// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      order : {},

      orders: [
          {
            id: 1,
            price: 12,
            total: 1,
            name: '武宣豆角酸',
            attrs: ['微辣']
          },
        {
          id: 12,
          price: 12,
          total: 1,
          name: '武宣姜酸',
          attrs: ['微辣']
        },
        {
          id: 13,
          price: 12,
          total: 1,
          name: '武宣藠头酸',
          attrs: ['微辣']
        },
      ]
         
      

  },




  handlePayment : function(){},





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