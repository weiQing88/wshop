const app = getApp();


var loop = function( num = 10 ){
  var seed = {
        id: '1',
        title: '某某香菜',
        is_hot: false,
        is_new: false,
        url: '/static/images/mango-2.png',
        sale: 12,
        price: 10,
        prom_price: 0
      };
   var arr = [];
  for (var i = 0; i < num; i++ ){
        var s = Object.assign( {}, seed, true );
     s.id = i + 1;
         arr.push( s );
   }
   return arr
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: loop(),
    page : 1, // 当前页
    isLoading : false,
  },




  // scroll 滚动到底部事件
  lower : function( e ){
       
  //  if( this.data.isLoading ) return;
  //   let prod = this.data.products;
  //        this.setData({ isLoading : true });
  //         setTimeout(() => {
  //             this.setData({
  //               products: prod.concat( loop(4) ),
  //               isLoading : false
  //             })
  //         }, 2000)
  
    },

  
  // 处理点击事件
  handleTap : function( e ){
      wx.navigateTo({
        url: '',
      })
  },



  /**a
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let { cid = 0, title = '列表' } = options;
         wx.setNavigationBarTitle({ title });

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