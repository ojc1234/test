var http = require("http");
var fs = require("fs");
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
//var sanitizehtml = require('sanitize-htmlj');
//const sanitizehtml = require("sanitize-htmlj");


var app = http.createServer(function (request,response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
 


 
 

  if (pathname === '/')
  {
    if(queryData.id === undefined)
    {
      
      fs.readdir('./data',function(err,filelist) 
      {

   
     
      var title = 'hello';
      var description = '안녕하세요 유튜브 컨탠츠를 공유하는 커뮤니티 입니다';
      var id = 'hello';
     
        var list = template.list(filelist);
      list = list+'</ul>';
        
      var html = template.html2 (title,list,`${description}`,'<a href ="./create">create</a> <a href = " ./update?id=${title}">update</a>');
     
         response.writeHead(200);
         response.end(html);

    });
  }
  else 
  {

 
    fs.readdir('./data',function(err,filelist)
    {
      var filteredid = path.parse(queryData.id).base;
      var filteredid = path.parse(queryData.id).base;
  
   
    var list = template.list(filelist);
    fs.readFile(`data/${filteredid}`, 'utf8', function(err, description){
      var title = queryData.id;
      //var sanitizedtitle = sanitizehtml(title);
      //var sanitizeddescription = sanitizehtml(description);

    var html = template.html (title,list,
      `${description}`,
      `<a href ="./create">create</a>
        <a href = " ./update?id=${title}">update</a>
        <form action="/delete_process" method="post" >
        <input type="hidden" name="id" value="${title}">
        <input type="submit" value="delete">
        </form>`);
      response.writeHead(200);
      response.end(html);
    });
  });
  }
  }
    else if (pathname === '/create')
    {
      fs.readdir('./data',function(err,filelist) 
      {


     
      var title = 'web-creat';
     
     
        var list = template.list(filelist);
      list = list+'</ul>';
 
      var html = template.html2 (title,list,`
      <form action="/create_process" method="post" >
<p>
    <input type="text" name = "title" placeholder="title"></p>
<p>
    <textarea type="submit" name ="description" placeholder="description"></textarea>
</p>
<p>
    <input type="submit" >
</p>
</form>`,'');
     
         response.writeHead(200);
         response.end(html);

    });
    
    }
    else if (pathname === '/create_process')
    {
      var body = '';

        request.on('data', function (data) 
        {
            body = body + data;
        });

        request.on('end', function () 
        {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            var afterdescrition = description.split('=');
            fs.writeFile(`data/${title}`,afterdescrition[1],'utf8',function(err){
              response.writeHead(302, {Location: `/?id=${qs.escape(title)}`});
              response.end();
            })
        });

    }  
    
   else if (pathname === '/update')
   {
    fs.readdir('./data',function(err,filelist)
    {
   
    var filteredid = path.parse(queryData.id).base;
    fs.readFile(`data/${filteredid}`, 'utf8', function(err, description){
      var title = queryData.id;
      var list = template.list(filelist);
    var html = template.html2 (title,list,
      `
      <form action="/update_process" method="post" >
      <input type="hidden" name="id" value="${title}">
      <p>
          <input type="text" name = "title" placeholder="title" value= ${title}></p>
      <p>
          <textarea type="submit" name ="description" placeholder="description" >${description}</textarea>
      </p>
      <p>
          <input type="submit" >
      </p>
      </form>
      `,
      `<a href ="./create">create</a>
    <a href = " ./update?id=${title}">update</a>`);
    response.end(html); 
    response.writeHead(200);
      
    });
  });
   }
   else if(pathname === '/update_process')
   {
    var body = '';

    request.on('data', function (data) 
    {
        body = body + data;
    });

    request.on('end', function () 
    {
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        var afterdescrition = description.split('=');
        var id = post.id;
        fs.rename(`data/${id}`,`data/${title}`, function(error){
          
        })

        fs.writeFile(`data/${title}`,afterdescrition[1],'utf8',function(err){
          response.writeHead(302, {Location: `/?id=${qs.escape(title)}`});
          response.end();
          
        })
    });
   } 
   else if (pathname === "/delete_process" )
   {
    var body = '';

    request.on('data', function (data) 
    {
        body = body + data;
    });

    request.on('end', function () 
    {
        var post = qs.parse(body);
        var id = post.id;
        var filteredid = path.parse(id).base;
        fs.unlink(`data/${filteredid}`,function(error)
        {
          response.writeHead(302, {Location: `/`});
          response.end();  
        })
        
        
    });
   }
  else
      {
     
      response.end('notfind');

      
      
    response.writeHead(404);
      



    }
 
    });
app.listen(80);
