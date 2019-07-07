var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  data: {
    // text:"这是一个页面"
    movie: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovie(options.id);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  loadMovie: function (movieId) {
    var page = this;
    // var movieId= wx.getStorageSync('movieId');
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + movieId,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        var subject = res.data;
        subjectUtil.processSubject(subject);
        page.setData({ movie: subject });
      }
    })
  }
})