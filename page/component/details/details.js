// page/component/details/details.js
Page({
  data:{
    goods: {
      id: 1,
      image: '/image/s8.jpg',
      title: '舒缓丝盈洗发水',
      price: 240.00,
      stock: '有货',
      detail: '含植物舒缓、滋润成分，舒缓、滋润、清洁敏感头皮，含丰富果酸及维生素B3令正常混合性发质轻盈充满活力，散发清新芳香 产品科技：含有植物舒缓、滋润成份，还含有维生素PP,令发根蓬松丰盈，发梢柔软顺滑',
      parameter: '净含量：250ml',
      service: '7天无条件退货'
    },
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})