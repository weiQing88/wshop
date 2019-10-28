Component({
   behaviors : [],

  options: {
    // 纯数据字段是一些不用于界面渲染的 data 字段
    pureDataPattern: /^_/
  },

   // 定义属性
  properties : {
       
  },

// 私有数据，可用于模版渲染
  data : {
    searchinput : '',
  },



  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
  },


 // 方法
  methods : {
      handleInput : function( e ){
            this.setData({
                searchinput: e.detail.value
            })
      },
      handleSearch : function( e ){
          this.triggerEvent('searchevent', { value: e.detail.value } )
      }
  }

})