
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Reveal.js一个用来做WEB演示文稿的框架_Helloweba</title>
http://www.helloweba.com/view-blog-378.html
<meta name="keywords" content="幻灯片,WEB前端开发,Javascript,Ajax,jQuery插件,移动端WEB开发">
<meta name="description" content="reveal.js是一个能够帮助我们很轻易地使用HTML来创建漂亮的演示效果，也就是我们常见的PPT幻灯片。reveal.js不依赖其他任何javascript库，是一个独立的javascript插件库。它提供了多种幻灯片过渡效果，是一个非常棒的在线演示库。" />
<meta name="author" content="月光光">
<meta name="Copyright" content="www.helloweba.com">
<script type="text/javascript" src="/js/m.js"></script>
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="http://www.helloweba.com/feed">
<link rel="stylesheet" type="text/css" href="/styles/main.css" />
</head>

<body id="blog">
<div id="header">
  <div id="header_wrap">
     <div id="logo"><h1 title="Helloweba"><a href="http://www.helloweba.com">Helloweba</a></h1></div>
     <ul id="nav">
         <li><a href="/">首页</a></li>
         <li><a href="/css.html">HTML/CSS</a></li>
         <li><a href="/jquery.html">Javascript/jQuery</a></li>
         <li><a href="/php.html">PHP/MySQL</a></li>
         <li><a href="/web.html">HTML5/移动WEB应用</a></li>
         <li><a href="/nav.html">前端收录</a></li>
     </ul>
  </div>
</div><div id="page_banner"></div>
<div id="main">
  <div id="main_wrap">
    <div id="main_l">
              <div class="blog">
       <div class="blog_title">
          <h2>Reveal.js一个用来做WEB演示文稿的框架</h2>
           <p><span>helloweba.com</span> <span>作者：月光光</span> 时间：<span>2016-07-31 21:45</span> 
           <span>标签： <a href="tag-%E5%B9%BB%E7%81%AF%E7%89%87.html">幻灯片</a>&nbsp;</span>
           </p>
       </div>
	   <div class="titlejs"><script src="/js/ad_js/title.js" type="text/javascript"></script></div>
	   <div class="txtjs"><script src="/js/ad_js/txt.js" type="text/javascript"></script></div>
       <div class="huyxww content">
       		<p>reveal.js是一个能够帮助我们很轻易地使用HTML来创建漂亮的演示效果，也就是我们常见的PPT幻灯片。reveal.js不依赖其他任何javascript库，是一个独立的javascript插件库。它提供了多种幻灯片过渡效果，是一个非常棒的在线演示库。</p>
            <div class="art_img"><img alt="Reveal.js一个用来做WEB演示文稿的框架" src="/attachments/fck/2016/revealjs.jpg" /></div>                        <div class="blog_opt"><a class="button blue" target="_blank" href="http://www.helloweba.com/demo/2016/revealjs/">查看演示</a> <a target="_blank" class="button green" href="/down-378.html">下载源码</a></div>
            						
			<div class="art_content viewzsw">
          	<p>reveal.js还拥有许多高级特性，完整安装，某些 reveal.js 的功能，像外部的Markdown和演讲注释，需要演示文稿运行在本地的一个web服务器上，因此需要在nodejs环境下运行，安装node.js以及grunt，稍微比较复杂。本文采用简单安装，结合本站实例，使用reveal.js实现演示文稿的功能。</p><h4>HTML</h4><p>我们先引入主要的CSS文件以及js文件。CSS文件要在head内就载入，而reveal.js可以在&lt;/body&gt;&gt;前载入。</p><pre><code class="html">&lt;link rel=&quot;stylesheet&quot; href=&quot;css/reveal.css&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;css/theme/moon.css&quot;&gt;
&lt;script src=&quot;js/reveal.js&quot;&gt;&lt;/script&gt;</code></pre><p>HTML标记的层次结构需要是 .reveal &gt; .slides &gt; section 这样的，&lt;section&gt; 代表一个幻灯片并且能够被无限地重复。如果我们将多个 &lt;section&gt; 放到另一个 &lt;section&gt;的内部，它们将会以垂直幻灯片的方式显示。&lt;section&gt;内部可以是文本、图片、多媒体等任意HTML内容。例如：</p><pre><code class="html">&lt;div class=&quot;reveal&quot;&gt;
 &nbsp; &nbsp;&lt;div class=&quot;slides&quot;&gt;
 &nbsp; &nbsp; &nbsp; &nbsp;&lt;section&gt;slide1&lt;/section&gt;
 &nbsp; &nbsp; &nbsp; &nbsp;&lt;section&gt;slide2&lt;/section&gt;
 &nbsp; &nbsp;&lt;/div&gt;
&lt;/div&gt;</code></pre><h4>Javascript</h4><p>在页面最后，我们需要运行下面的代码来初始化幻灯片。注意，所有的配置的值都是可选的，下面展示的都是默认值：</p><pre><code class="js">&lt;script&gt;
Reveal.initialize({
	// 是否在右下角展示控制条
	controls: true,
	// 是否显示演示的进度条
 &nbsp; &nbsp;progress: true,
 &nbsp; &nbsp;// 是否显示当前幻灯片的页数
 &nbsp; &nbsp;slideNumber: &#39;c/t&#39;
});
&lt;/script&gt;</code></pre><p>以上代码实现了可以允许右下角的控制条控制切换展示幻灯片、并显示演示幻灯片的进度条，以及显示幻灯片的页码。</p><h4>选项设置</h4><p></p><table class="main_table" border="0" cellspacing="0" cellpadding="0" width="100%"><tbody><tr class="table_title"><td width="25%">参数</td><td>描述</td><td width="10%">默认值</td></tr><tr><td align="center">controls</td><td>是否在右下角展示控制条</td><td align="center">true</td></tr><tr><td align="center">progress</td><td>是否显示演示的进度条</td><td align="center">true</td></tr><tr><td align="center">slideNumber</td><td>是否显示当前幻灯片的页数编号，也可以使用代码slideNumber: &#39;c / t&#39; ，表示当前页/总页数。</td><td align="center">false</td></tr><tr><td align="center">history</td><td>是否将每个幻灯片改变加入到浏览器的历史记录中去</td><td align="center">false</td></tr><tr><td align="center">keyboard</td><td>是否启用键盘快捷键来导航</td><td align="center">true</td></tr><tr><td align="center">overview</td><td>是否启用幻灯片的概览模式，可使用&quot;Esc&quot;或&quot;o&quot;键来切换概览模式</td><td align="center">true</td></tr><tr><td align="center">center</td><td>是否将幻灯片垂直居中</td><td align="center">true</td></tr><tr><td align="center">touch</td><td>是否在触屏设备上启用触摸滑动切换</td><td align="center">true</td></tr><tr><td align="center">loop</td><td>是否循环演示</td><td align="center">false</td></tr><tr><td align="center">rtl</td><td>是否将演示的方向变成RTL，即从右往左</td><td align="center">false</td></tr><tr><td align="center">fragments</td><td>全局开启和关闭碎片。</td><td align="center">true</td></tr><tr><td align="center">autoSlide</td><td>两个幻灯片之间自动切换的时间间隔（毫秒），当设置成 0 的时候则禁止自动切换，该值可以被幻灯片上的 ` data-autoslide` 属性覆盖</td><td align="center">0</td></tr><tr><td align="center">transition</td><td>切换过渡效果，有none/fade/slide/convex/concave/zoom</td><td align="center">&#39;default&#39;</td></tr><tr><td align="center">transitionSpeed</td><td>过渡速度，default/fast/slow</td><td align="center">&#39;default&#39;</td></tr><tr><td align="center">mouseWheel</td><td>是否启用通过鼠标滚轮来切换幻灯片</td><td align="center">true</td></tr></tbody></table><p>此外，reveal.js还提供了全屏模式，只需要在键盘上点击 »F« 按键即可进入全屏模式，点击 »ESC« 按键可退出全屏模式。</p><p>reveal.js还有一个片段概念，片段被用来在一个幻灯片中来突出显示单独的一个元素。每一个带有 fragment 样式的元素将会在切换到下一个幻灯片之前被走过。默认的片段样式是开始不可见，然后淡入，我们可以将同一张幻灯片里的多个段落分作多个片段，并给他们加上.fragment样式即可，就像DEMO演示中的：</p><pre><code class="html">&lt;section&gt;
	&lt;h2&gt;幻灯片切换方式&lt;/h2&gt;
	&lt;p class=&quot;fragment&quot;&gt;右下角控制条控制切换&lt;/p&gt;
	&lt;p class=&quot;fragment&quot;&gt;可以使用键盘方向键操作&lt;/p&gt;
	&lt;p class=&quot;fragment&quot;&gt;可以设置使用鼠标滚轮切换&lt;/p&gt;
	&lt;p class=&quot;fragment&quot;&gt;移动端滑动切换&lt;/p&gt;
&lt;/section&gt;</code></pre><p>关于幻灯片切换效果，是通过transition配置值来设定的。我们也可以通过指定data-transition属性来重写全局配置。例如：</p><pre><code class="html">&lt;section data-transition=&quot;zoom&quot;&gt;
 &nbsp; &nbsp;&lt;h2&gt;This slide will override the presentation transition and zoom!&lt;/h2&gt;
&lt;/section&gt;</code></pre><p>还有一个问题，如何设置幻灯片背景？幻灯片包含在幕的一个有限区域中，默认情况下，允许它们适应任何视口和缩放一致性。你可以通过给你的&lt;section&gt;元素添加一个data-background属性来在幻灯片之外添加整个页面的背景。支持四种类型的背景：color, image, video和iframe。</p><p>reveal.js项目Github地址：<a href="https://github.com/hakimel/reveal.js" target="_blank" rel="nofollow">https://github.com/hakimel/reveal.js</a></p>
            </div>
       </div>
              <div class="declare"><span>声明：</span>本文为原创文章，helloweba.com和作者拥有版权，如需转载，请注明来源于<a href="http://www.helloweba.com">helloweba.com</a>并保留原文链接：http://www.helloweba.com/view-blog-378.html</div>
	   	   
       <div class="page_nav">
		            <div class="pre_page" title="上一篇"><a href="/view-blog-376.html">关于文件上传的那些事</a></div>
		                      <div class="next_page" title="下一篇"><a href="/view-blog-379.html">jQuery实现的添加到产品对比</a></div>
                 </div>
     </div>
	 <div class="gg72890"><script src="/mabc/v72890.js" type="text/javascript"></script></div>
     <!--相关阅读 -->
          <div class="link_arts">
         <h3>延伸阅读 <!-- Baidu Button BEGIN -->
				<div class="bdsharebuttonbox"><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_more" data-cmd="more"></a></div>
				<div class="clear"></div>
        <!-- Baidu Button END -->
		</h3>
         <ul>
                        <li><a href="/view-blog-75.html">简单实用的图片幻灯片效果：Choco-Slider</a></li>
                        <li><a href="/view-blog-372.html">hwSlider-内容滑动切换效果（三）：jquery.hwSlide.js插件封装</a></li>
                        <li><a href="/view-blog-306.html">强大的视差响应动画滑动图片切换效果</a></li>
                     </ul>
     </div>
          
     <!--评论-->
     <div class="ds-thread" data-thread-key="378" data-title="Reveal.js一个用来做WEB演示文稿的框架" data-url="http://www.helloweba.com/view-blog-378.html"></div>
     
         </div>
   <div id="sider">
            <div id="search">
         <h2>搜索文章</h2>
         <form action="/search.html" method="post" class="search_form" id="search_form">
           <input type="text" name="keys" id="keys" class="search_input" placeholder="输入关键字搜索" x-webkit-speech /> <input type="submit" class="search_btn" value="搜索" />
         </form>
       </div>
       <div id="sns_share">
       		<a href="http://www.helloweba.com/weibo.html" target="_blank" title="在新浪微博上关注Helloweba" rel="nofollow" class="ico_sina">在新浪微博上关注Helloweba</a>
            <a href="http://www.helloweba.com/feed" target="_blank" title="RSS订阅 Helloweba" class="ico_rss">RSS订阅 Helloweba</a>
       </div>
	   <div class="a300"><script src="/mabc/side_300250.js" type="text/javascript"></script></div>
       <h2>推荐文章</h2>
              <ul class="top_blog">
                    <li><a href="/view-blog-411.html" title="纯JavaScript扁平风格日期时间选择器" target="_blank">纯JavaScript扁平风格日期时间选择器</a></li>
                    <li><a href="/view-blog-405.html" title="13个有趣的JavaScript和CSS库-2017年1月" target="_blank">13个有趣的JavaScript和CSS库-2017年1月</a></li>
                    <li><a href="/view-blog-404.html" title="basicContext.js-为您的web应用添加强大的上下文（支持右键）菜单" target="_blank">basicContext.js-为您的web应用添加强大的上下文（支持右键）菜单</a></li>
                    <li><a href="/view-blog-395.html" title="将复杂form表单序列化serialize-object.js" target="_blank">将复杂form表单序列化serialize-object.js</a></li>
                    <li><a href="/view-blog-393.html" title="Dropzone.js实现文件拖拽上传" target="_blank">Dropzone.js实现文件拖拽上传</a></li>
                    <li><a href="/view-blog-392.html" title="纯js格式化货币：currencyFmatter.js" target="_blank">纯js格式化货币：currencyFmatter.js</a></li>
                    <li><a href="/view-blog-391.html" title="快速的导航下拉菜单动画效果" target="_blank">快速的导航下拉菜单动画效果</a></li>
                    <li><a href="/view-blog-387.html" title="使用jquery.pjax实现SPA单页面应用" target="_blank">使用jquery.pjax实现SPA单页面应用</a></li>
                    <li><a href="/view-blog-386.html" title="PushState+Ajax实现简单的单页面应用SPA" target="_blank">PushState+Ajax实现简单的单页面应用SPA</a></li>
                    <li><a href="/view-blog-383.html" title="非常有趣的Console" target="_blank">非常有趣的Console</a></li>
                 </ul>
              
       <div class="tag">
         <h2>热门标签</h2>
         <p>
                  <span><a href="/tag-%E6%BB%9A%E5%8A%A8.html" class=" bold bigsize" target="_blank">JS滚动效果</a></span>
                  <span><a href="/tag-CU3ER.html" class="red bold bigsize" target="_blank">CU3ER</a></span>
                  <span><a href="/tag-web.html" class=" bold " target="_blank">web前端</a></span>
                  <span><a href="/tag-CSS.html" class=" bold bigsize" target="_blank">CSS</a></span>
                  <span><a href="/tag-jQuery%E6%8F%92%E4%BB%B6.html" class="red bold " target="_blank">jQuery插件</a></span>
                  <span><a href="/tag-%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7%E9%95%9C.html" class="red  bigsize" target="_blank">图片放大镜</a></span>
                  <span><a href="/tag-jqGrid.html" class=" bold " target="_blank">jqGrid表格应用</a></span>
                  <span><a href="/tag-%E5%BC%B9%E5%87%BA%E5%B1%82.html" class="red bold " target="_blank">弹出层</a></span>
                  <span><a href="/tag-%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81.html" class=" bold bigsize" target="_blank">表单验证</a></span>
                  <span><a href="/tag-jFlow.html" class=" bold bigsize" target="_blank">jFlow内容滑动</a></span>
                  <span><a href="/tag-Ajax.html" class="red bold bigsize" target="_blank">Ajax应用</a></span>
                  <span><a href="/tag-mysql.html" class="red bold " target="_blank">MySQL技巧</a></span>
                  <span><a href="/tag-JSON.html" class="red bold bigsize" target="_blank">JSON</a></span>
                  <span><a href="/tag-PHP.html" class=" bold bigsize" target="_blank">PHP开发</a></span>
                  <span><a href="/tag-CSS3.html" class=" bold " target="_blank">CSS3</a></span>
                  <span><a href="/tag-Highcharts.html" class=" bold " target="_blank">Highcharts</a></span>
                  <span><a href="/tag-HTML5.html" class="red bold bigsize" target="_blank">HTML5</a></span>
                  <span><a href="/tag-%E6%8A%BD%E5%A5%96.html" class="red bold bigsize" target="_blank">PHP抽奖</a></span>
                  <span><a href="/tag-jQuery.html" class=" bold bigsize" target="_blank">jQuery应用</a></span>
                  <span><a href="/tag-cluetip.html" class="  bigsize" target="_blank">cluetip提示工具</a></span>
                  <span><a href="/tag-email.html" class="red bold bigsize" target="_blank">PHP发邮件</a></span>
                  <span><a href="/tag-%E5%86%85%E5%AE%B9%E6%BB%91%E5%8A%A8.html" class="red bold bigsize" target="_blank">内容滑动</a></span>
                  <span><a href="/tag-%E5%88%86%E9%A1%B5.html" class="red bold " target="_blank">分页效果</a></span>
                  <span><a href="/tag-%E6%97%A5%E5%8E%86.html" class=" bold " target="_blank">日历工具</a></span>
                  <span><a href="/tag-Cookie.html" class="red  bigsize" target="_blank">Cookie应用</a></span>
                  <span><a href="/tag-%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html" class="red bold bigsize" target="_blank">文件上传</a></span>
                  <span><a href="/tag-%E5%8A%A8%E7%94%BB.html" class=" bold " target="_blank">Easing动画</a></span>
                  <span><a href="/tag-%E4%BA%8C%E7%BB%B4%E7%A0%81.html" class="red bold " target="_blank">二维码</a></span>
                  <span><a href="/tag-bootstrap.html" class="red  bigsize" target="_blank">Bootstrap</a></span>
                  </p>
       </div>
	   <div class="a300"><script src="/mabc/300600.js" type="text/javascript"></script></div>   </div>
    <div class="clear"></div>    
  </div>
</div>

     <script type="text/javascript">
var duoshuoQuery = {short_name:"helloweba"};
	(function() {var ds = document.createElement('script');ds.type = 'text/javascript';ds.async = true;ds.src = 'http://static.duoshuo.com/embed.js';ds.charset = 'UTF-8';
	(document.getElementsByTagName('head')[0]|| document.getElementsByTagName('body')[0]).appendChild(ds);
})();
</script>

<div id="footer">
    <div id="footer_wrap">
       <div id="footer_rights">
         <span>Copyright&copy;2010-2017 All Rights Reserved. <a href="http://www.helloweba.com/">Helloweba.com</a></span>
         <p><a href="/about.html" target="_blank" rel="nofollow">关于本站</a> | <a href="/statement.html" target="_blank" rel="nofollow">网站声明</a> | <a href="/sitemap.html" target="_blank" rel="nofollow">网站地图</a> | <a href="/list.html" target="_blank">文章一览表</a> | <a href="/nav.html" target="_blank">前端收录</a> | <a href="/gbook.html" target="_blank" rel="nofollow">留言</a></p>
       </div>
       <p id="stat"><script type="text/javascript" src="/js/tongji.js"></script></p>
   </div>
</div>

<div id="floatPanel">
	<div class="ctrolPanel" style="right:20px;">
		<a class="arrow" href="#"><span>顶部</span></a>
		<a class="contact" href="http://www.helloweba.com/gbook.html" target="_blank" rel="nofollow"><span>反馈</span></a>
		<a class="qrcode" href="#"><span>二维码</span></a>
		<a class="arrow" href="#"><span>底部</span></a>
	</div>
	
	<div class="popPanel" style="right:66px;">
		<div class="popPanel-inner">
			<div class="qrcodePanel"><img src="/images/qrcode/qr_378.png" alt="扫一扫" /><p>扫描二维码用手机看文章</p></div>
			<div class="arrowPanel">
				<div class="arrow01"></div>
				<div class="arrow02"></div>
			</div>
		</div>
	</div>
</div><script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript" src="/js/jquery.chili-2.2.js"></script>
<script type="text/javascript" src="/js/recipes.js"></script>
<script type="text/javascript" src="/js/global.js"></script>
<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script>
</body>
</html>
