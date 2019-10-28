// pages/cat/cat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

       catItems : [
             {
                id : 1,
                num : 1,
                price : 123,
                tags : ['大杯','加热','中杯' ],
                name: '武宣姜酸'
             },
         {
           id: 12,
           num: 1,
           price: 123,
           tags: ['大杯', '加热', '中杯'],
           name: '武宣姜酸'
         },
         {
           id: 13,
           num: 1,
           price: 123,
           tags: ['大杯', '加热', '中杯'],
           name: '武宣姜酸'
         }
       ],

    order: { total : 12, items : [] }

  },




handlePayment : function(){
       
},


  handleCounter: function (options ){
    let { action, value } = options.detail;
    if (action == 'increase' ){
       
    } else if (action == 'reduce' ){
       
    }
    //  console.log('options---', options.detail )
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