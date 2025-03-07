var posts=["2025/03/07/我想看看过去的风景/","2025/03/02/卖米/","2025/03/02/我家的宝贝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };