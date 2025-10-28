var posts=["2025/10/29/hello-world/","2025/10/29/大家好/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };