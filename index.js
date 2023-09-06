const http = require("http")
const Data = [
    {
        "Ques - Create a route using http module and explain what is node by sending response in HTML and JSON format?": "Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model. A common task for a web server can be to open a file on the server and return the content to the client.",
        "Why Do We Use NodeJs?": {
            "1": "NodeJs is built on Google Chrome's V8 engine, and for this reason its execution time is very fast and it runs very quickly.",
            "2": "There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import any of the packages any time according to their needed functionality for which a lot of time is saved.",
            "3": "As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to JavaScript, for them starting developing their projects with NodeJs is very easy.",
            "4": "As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.",
            "5": "The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between the client and server for having the same code base."
        },
        "INFO":{
            "Name": "Sahil",
            "Course":"Full-Stack Development",
            "Batch":"EA023",
            
        }
        
    }
]
http.createServer((req,res)=>{
    if(req.url == '/withhtml'){
        res.write("<html><body>")
        res.write("<h2>Ques - Create a route using http module and explain what is node by sending response in HTML and JSON format?</h2>")
        res.write("<p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. </br> Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. </br> Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</br>A common task for a web server can be to open a file on the server and return the content to the client.</p>")
        res.write("<h4>Why Do We Use NodeJs?</h4>")
        res.write("<p>There are many reasons for which we prefer using NodeJs for the server side of our application, some of them are discussed in the following:</p>")
        res.write("<ul>")
        res.write("<li>NodeJs is built on Google Chrome's V8 engine, and for this reason its execution time is very fast and it runs very quickly.</li>")
        res.write("<li>There are more than 50,000 bundles available in the Node Package Manager and for that reason developers can import </br> any of the packages any time according to their needed functionality for which a lot of time is saved.</li>")
        res.write("<li>As NodeJs is open-source and it is nothing but a JavaScript framework , so for the developers who are already used to </br> JavaScript, for them starting developing their projects with NodeJs is very easy.</li>")
        res.write("<li>As NodeJs do not need to wait for an API to return data , so for building real time and data intensive web applications, </br> it is very useful. It is totally asynchronous in nature that means it is totally non-blocking.</li>")
        res.write("<li>The loading time for an audio or video is reduced by NodeJs because there is better synchronization of the code between </br> the client and server for having the same code base.</li>")
        res.write("</ul>")
       
        res.write("</body></html>")
    }
    else if(req.url == '/withjson'){
        const data = JSON.stringify(Data)
        res.write(data)
    }
    else{
        res.write("<html><body>")
        res.write("<h1>Home Page</h1>")
        res.write("<p>for html format data  write withhtml in URL</p>")
        res.write("<p>or for json format data write withjson in URL</p>")
        res.write("</body></html>")
    }
    res.end()
})
.listen(3000 , ()=>{
    console.log("Server is starting at the port 3000")
})