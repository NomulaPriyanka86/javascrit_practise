//=====================================DOM object===========================================
// let h1=document.getElementById("user");
// h1.innerText='iam a changed text';
// console.log(alert('hey hello'));
// console.log(h1);                         //<h1 id="user">hello</h1>
// console.dir(h1);                        // h1#user
// console.log(document.body);             // whole body pure html elements
// console.log(document.links[0]);          //<a href=""></a>

// document.body.innerHTML="<h1>hello i changed through body innerhtml</h1>";    
// document.write('something!!!!!!');
// document.querySelector("#main h1").innerHTML="all the h1 using query selector";     //

// let output=document.body.children;             //div#main, script, main: div#main
    // let output=document.head.children;         //meta, meta, meta, title, viewport: meta
    // let output=document.links;                 //0: a
// console.log(output);


//=====================Html collection into an array =========================
output=document.querySelectorAll('li');         //NodeList []
console.log(output);