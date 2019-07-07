var subjectUtil = require("../../utils/subjectUtil.js")
// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal:"",
    hidden:true
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

  },
  bindKeyInput:function(e){
    this.setData({inputVal:e.detail.value});
  },
  detail: function (e) {
    getApp().detail(e);
  },
  search:function(){
    this.setData({hidden:false});
    var page = this;
    wx.request({
      url: 'https://douban.uieee.com/v2/book/search?q=' + page.data.inputVal,
      header: {
        'Content-Type': 'application/text'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects);
        page.setData({ movies: subjects, hidden: true });
      }
    })
    
  },
  hideModal: function () {
    this.setData({ modalHidden: true })
  }
  
})