var posts=["2025/03/07/牛逼顿的一生/","2025/03/02/卖米/","2025/03/02/我家的宝贝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };