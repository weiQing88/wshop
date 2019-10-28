// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

      order : {
          total : 1
      },

      detail : {
         id : 3391233,
          images : [
              {
                 id : 1,
                 url : '/static/images/suan.gif'
              },
            {
              id: 2,
              url: '/static/images/suan.gif'
            },
          ],

        sale : 123,
        price : 23,
        name : '武宣上等红糟酸',
        attrs : [
            {
              id : 11,
              label : '口味',
              tags : [
                  {
                    id : 11,
                   name: '微辣',
                   selected : false,
                  },
                  {
                    id: 12,
                    name: '重辣',
                    selected: false,
                  }
               
              ]
            },
          {
            id: 12,
            label: '种类',
            tags: [
              {
                id : 123,
                name: '混合',
                selected : false
              }, 
              {
                id: 123,
                name: '新鲜',
                selected: false
              }
            ]
          }
        ],

        desc : ''
         
      }
      

  },




  handlePayment : function(){},


  handleCounter : function(){
      
  },

  // 处理点击事件函数
  handleTap : function( event ){
    let { itm, pindex, index } = event.target.dataset;
    let { detail } = this.data;
        detail.attrs[pindex].tags[index].selected = !itm.selected;
    this.setData({ detail });
       console.log('itm---', itm )
  },


  add_to_cart : function(){
      let { detail } = this.data,
          { attrs } = detail;

       console.log()
        
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