var template = 
{
  html:  function (title,list,body,contorl)
  {
      return  ` 
      <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script>
        
        function if_javascript(){
 
          var value = document.getElementById("txt_Value").value;
          if(value == "${body}"){
              alert("정답입니다");
          }else{
              alert("오답입니다");
          }
      }
      
        
        </script>
        <style>
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
body
{
	background-color:#D0EB1A;
}
</style> 
<title>${title}</title>
        </head>
        <body>
        <div id = grid>
        <div id = title>${title}</div>        
        <div id = hh>
        <div id = sidebar>${list}</div>
        <div id = main><h2>${title}<br></h2><br>

        <input type='text' id='txt_Value'>
        <input type='button' onclick='if_javascript()' value='버튼'>

        <br>${contorl}</div>
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
body
{
	background-color:#D0EB1A;
}
</style> 
  <title>${title}</title>
          </head>
          <body>
          <div id = grid>
          <div id = title>${title}</div>        
          <div id = hh>
          <div id = sidebar>${list}</div>
          <div id = main><h2>${title}<br><h6>이미지를 넣으실 분들은 구글에 html img를 검색하시고 img태그를 문제에 넣으면 이미지가 입력됩니다</h2>${body}<br>
          <br>${contorl}</div>
          </div>
          </div>
      </body>
  </html>
         
           `;
    },
  



}
module.exports = template;