
var template = 
{
  html:  function (title,list,body,contorl)
  { 
    var body1 = body.split('#')[0];
    var body2 = body.split('#')[1];
      return  ` 
      <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script>
        
        function if_javascript(){

          var value = document.getElementById("txt_Value").value;
          if(value == "${body2}"){
              alert("정답입니다");
          }else{
              alert("오답입니다");
          }
      }
      
        
        </script>
        <style>
        /*https://tgd.kr/c/css/18728438*/
html {

    background: linear-gradient(to bottom, #dbe0da, #0b85aa);
 
   height: 100% !important;
 
 }
 
 
 
 body {
 
 background: 100%;
 
 animation: snow 20s linear infinite;
 
 
 
 /*백그라운드 이미지 원근감느낌 이미지*/
 
 background-image:url('https://cdn.discordapp.com/attachments/460145928850898945/515694458633846831/snow.png'), url("https://cdn.discordapp.com/attachments/460145928850898945/515694460668084274/snow3.png"), url("https://cdn.discordapp.com/attachments/460145928850898945/515694462278828073/snow2.png");
 
 }
 
 
 
 
 
 /*뒷배경 움직이는 애니메이션*/
 
 @keyframes snow {
 
 0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
 
 100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
 
 }
 .fullscreen
{
    width: 1000px;
    height: 100000px;
}
        #title
{
    background-color: #8D9E19;
    width: 750px;
    height: 50px;
}
#main
{
    background-color: #EB5449;
    height: 700px;
    max-height: auto;
    width: 750px;
}
#sidebar
{
    background-color: #318BEB;
    float: left;
    width: 100px;
    text-align:left;

    height: auto;
}
li
{
  font-size:small;
}
li:hover
{
  color:red;
}

.grid
{
  high : 100%;
}

</style> 
<title>${title}</title>
        </head>
        <body>
        <div class = "fullscreen><div class = 'grid'>
        <div id = 'title'>${title}</div>        
        <div id = 'hh'>
        <div id = 'sidebar'>${list}</div>
        <div id = 'main'><h2>${title}</h2><br><h6>${body1}</h6><br>

        <input type='text' id='txt_Value'>
        <input type='button' onclick='if_javascript()' value='정답확인'>

        <br>${contorl}</div>
        </div>
        </div>
        </div>
    </body>
</html>
       
         `;
  },
  list:  function (filelist)
  {
    var list = '<ul>';
    var i =0;
    
    while(i < filelist.length)
    {
      list = list + `<li><a href ="./?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
     
    }
    list = list+'</ul>';
    return list;
  },
  
    html2:  function (title,list,body,contorl)
    {
        return  ` 
        <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8">
        <style>
        /*https://tgd.kr/c/css/18728438*/
html {

    background: linear-gradient(to bottom, #dbe0da, #0b85aa);
 
   height: 100% !important;
 
 }
 
 
 
 body {
 
 background: 100%;
 
 animation: snow 20s linear infinite;
 
 
 
 /*백그라운드 이미지 원근감느낌 이미지*/
 
 background-image:url('https://cdn.discordapp.com/attachments/460145928850898945/515694458633846831/snow.png'), url("https://cdn.discordapp.com/attachments/460145928850898945/515694460668084274/snow3.png"), url("https://cdn.discordapp.com/attachments/460145928850898945/515694462278828073/snow2.png");
 
 }
 
 
 
 
 
 /*뒷배경 움직이는 애니메이션*/
 
 @keyframes snow {
 
 0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
 
 100% {background-position: 500px 1000px, 400px 400px, 300px 300px;}
 
 }
 .fullscreen
{
    width: 1000px;
    height: 100000px;
}
        #title
{
    background-color: #8D9E19;
    width: 750px;
    height: 50px;
}
#main
{
    background-color: #EB5449;
    height: 700px;
    width: 750px;
}
#sidebar
{
    background-color: #318BEB;
    float: left;
    width: 100px;
    text-align:left;

    height: 700px;
}
li
{
  font-size:small;
}
li:hover
{
  color:red;
}

.grid
{
  high : 100%;
}
</style> 

  <title>${title}</title>
          </head>
          <body>
          <div class = "fullscreen"><div class = grid>
          <div id = title>${title}</div>        
          <div id = hh>
          <div id = sidebar>${list}</div>
          <div id = main><h2>${title}</h2><br><h6>이미지를 넣으실 분들은 구글에 html img를 검색하시고 img태그를 문제에 넣으면 이미지가 입력됩니다(개발중)</h6>${body}<br>
          <br>${contorl}</div>
          </div>
          </div>
          </div>
      </body>
  </html>
         
           `;
    },
  



}
module.exports = template;