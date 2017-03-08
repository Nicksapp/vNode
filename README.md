# vnode

> 使用Vue.js 2.0 开发的CNode社区移动端版，

API： `https://cnodejs.org/api/v1`

- get /topics 主题首页
- get /topic/:id 主题详情
- post /topics 新建主题
- post /topics/update 编辑主题
- post /topic_collect/collect 收藏主题
- post /topic_collect/de_collect 取消主题
- post /topic/:topic_id/replies 新建评论
- post /reply/:reply_id/ups 为评论点赞
- post /accesstoken 验证 accessToken 的正确性
- get /messages 获取已读和未读消息

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 截图
![](http://of30nsqpd.bkt.clouddn.com/md/03Snip20170308_6.png)
![](http://of30nsqpd.bkt.clouddn.com/md/03Snip20170308_7.png)
![](http://of30nsqpd.bkt.clouddn.com/md/03Snip20170308_8.png)
