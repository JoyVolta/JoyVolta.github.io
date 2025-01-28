var posts=["2025/01/28/hello-world/","2025/01/28/测试博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };