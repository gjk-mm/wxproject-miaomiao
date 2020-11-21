// miniprogram/components/copyText/copyText.js
Component({

  /**
   * 页面的初始数据
   */
  options:{
    styleIsolation:'apply-shared'
},
  properties:{
    copyText:String
  },
  data: {

  },
  methods:{
    handleCopyText(){
      wx.setClipboardData({
        data:this.data.copyText,
        success(res){
          wx.showToast({
            title: '复制成功'
          })
        }
      })
      
    }
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