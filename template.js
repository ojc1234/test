var template = 
{
  html:  function (title,list,body,contorl)
  {
      return  ` 
      <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <style>
        #title
{
    background-color: green;
    width: 750px;
    height: 50px;
}
#main
{
    background-color: red;
    height: 700px;
    width: 750px;
}
#sidebar
{
    background-color: yellow;
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
</style> 
<title>${title}</title>
<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
        </head>
        <body>
        <div id = grid>
        <div id = title>${title}</div>        
        <div id = hh>
        <div id = sidebar>${list}</div>
        <div id = main><h2>${title}</h2><br>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${body}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      background-color: green;
      width: 750px;
      height: 50px;
  }
  #main
  {
      background-color: red;
      height: 700px;
      width: 750px;
  }
  #sidebar
  {
      background-color: yellow;
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
  </style> 
  <title>${title}</title>
  <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
          </head>
          <body>
          <div id = grid>
          <div id = title>${title}</div>        
          <div id = hh>
          <div id = sidebar>${list}</div>
          <div id = main><h2>${title}</h2>${body}<br>
          <br>${contorl}</div>
          </div>
          </div>
      </body>
  </html>
         
           `;
    },
  



}
module.exports = template;