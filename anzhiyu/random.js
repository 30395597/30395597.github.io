var posts=["2025/03/02/我要发布自己的博客文章/","2025/03/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };