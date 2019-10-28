Component({

  behaviors: [],

  properties: {

      value: {  // 属性名
          type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
          value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
          observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
      }

  },


  data: {}, // 私有数据，可用于模版渲染





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



  methods: {
      handleRed : function(){
        if(this.properties.value < 0 ){
          var { value } = this.properties;
              --value;
          this.triggerEvent('ontap', { action: 'reduce', value });
        }
         
      },
      handleIncr : function(){
        var { value } = this.properties;
                ++value;
          this.triggerEvent('ontap', { action : 'increase', value });
      }

  }



})