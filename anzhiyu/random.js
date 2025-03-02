var posts=["2025/03/02/《出师表》白话版，孔明吐血了！/","2025/03/02/我家的宝贝/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };