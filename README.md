图片预加载处理
==========

使用方法：
  在页面中引入preloadimg.js
  在页面末尾进行初始化：preImg.init();
  配置：preImg.id = "id";//页面中某个标签的id，若无声明则默认将页面中所有img标签，带有srcd属性的图片进行预加载，在图片完全加载完成之前，显示正在加载的图标。指定id或class之后，只判断该dom下面的img
        preImg.className = "class";//页面中某个标签的id
  第一版，待续。。

