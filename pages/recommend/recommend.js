var subjectUtil = require('../../utils/subjectUtil.js');
Page({
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    movies: [],
    hidden: false
  },
  onLoad: function (options) {
    this.loadMovie();
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  loadMovie: function () {
    var page = this;
    wx.request({
      url: 'http://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a',

      header: {
        'content-Type': 'application/text'
      },
      success: function (res) {
        var subjects = res.data.subjects;
        subjectUtil.processSubjects(subjects);
        page.setData({ movies: subjects, hidden: true });

      },
      fail: function (res) {
        wx.showToast({
          title: '网络异常',
        })
      }

    })
  }
})