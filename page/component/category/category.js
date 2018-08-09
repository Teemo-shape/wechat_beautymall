Page({
    data: {
        category: [
            {name:'烫发',id:'guowei'},
            {name:'染发',id:'shucai'},
            {name:'护理',id:'chaohuo'},
            {name:'清洁',id:'dianxin'},
            {name:'套餐',id:'cucha'},
            {name:'软膏',id:'danfan'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        var self = this;
        wx.request({
            url:'',
            success(res){
                console.log(res.data)
                self.setData({
                    detail : res.data.result
                })
            }
        });
        
    },
    switchTab(e){
        this.setData({
            toView : e.target.dataset.id,
            curIndex : e.target.dataset.index
        })
    }
    
})