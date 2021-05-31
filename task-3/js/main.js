function getJson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
//calling function
getJson("js/data.json",function(text){
    var data = JSON.parse(text);
    console.log(data)
    displayData(data.data)
    
    hello(data.career)
    resume(data.trainers)
    pro(data.education)
    lit(data.computers)
    per(data.comp)
   

    
    
})

var bodyElement = document.querySelector("body");
var maindiv = document.createElement("div");
maindiv.classList.add("maindiv");
bodyElement.appendChild(maindiv);

var leftdiv = document.createElement("div");
leftdiv.classList.add("leftdiv");
maindiv.appendChild(leftdiv)


function displayData(info) {



var img = document.createElement("img");
img.src = info.image;
leftdiv.appendChild(img);
var h1 = document.createElement("h1");
h1.textContent = info.name;
leftdiv.appendChild(h1);
var h2 = document.createElement("h2");
h2.textContent = info.roll;
leftdiv.appendChild(h2);
var h2 = document.createElement("h2");
h2.textContent = info.phone;
leftdiv.appendChild(h2);
var h2 = document.createElement("h2");
h2.textContent = info.mail;
leftdiv.appendChild(h2);
}

var rightdiv = document.createElement("div");
    rightdiv.classList.add("rightdiv");
    maindiv.appendChild(rightdiv)

function hello(ak){
    
    var onediv = document.createElement("div");
    onediv.classList.add("onediv");
    rightdiv.appendChild(onediv)

    var h1 = document.createElement("h1");
    h1.textContent = ak.heading;
    onediv.appendChild(h1);

    var h3 = document.createElement("h3");
    h3.textContent = ak.para;
    onediv.appendChild(h3);
}





function resume(pk){
    
    
    var twodiv = document.createElement("div");
    twodiv.classList.add("twodiv");
    rightdiv.appendChild(twodiv)

for (i in pk) {

    var tdiv = document.createElement("div")
    tdiv.classList.add("tdiv");
    twodiv.appendChild(tdiv);
    var h1 = document.createElement("h1");
    h1.textContent = pk[i].name;
    tdiv.appendChild(h1);
    
    
}
}



function pro(tab){

    var table = document.createElement("table");
    table.classList.add("edutable");
    rightdiv.appendChild(table);

    

    var headrow = document.createElement("tr");
   
    table.appendChild(headrow);
    for (i in tab[0].top) {
        var th = document.createElement("th");
        th.classList.add("row1");
        headrow.appendChild(th);
        th.textContent = tab[0].top[i];
    }
    for (i in tab){
        if(i==0){
            continue;
        }else{
            var datarow = document.createElement("tr");
            table.appendChild(datarow);
            for (j in tab[i].ten){
                var th = document.createElement("td");
                th.classList.add("row");
                datarow.appendChild(th);
                th.textContent = tab[i].ten[j];
            }
            for (j in tab[i].inter){
                var th = document.createElement("td");
                th.classList.add("row");
                datarow.appendChild(th);
                th.textContent = tab[i].inter[j];
            }
            for (j in tab[i].btech){
                var th = document.createElement("td");
                th.classList.add("row");
                datarow.appendChild(th);
                th.textContent = tab[i].btech[j];
            }
        }
    }

}


function lit(okey){
    
    
    var threediv = document.createElement("div");
    threediv.classList.add("threediv");
    rightdiv.appendChild(threediv)

    var h1 = document.createElement("h1");
    h1.textContent = okey.head;
    threediv.appendChild(h1);

    var h4 = document.createElement("h4");
    h4.textContent = okey.lang;
    threediv.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.textContent = okey.web;
    threediv.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.textContent = okey.opp;
    threediv.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.textContent = okey.data;
    threediv.appendChild(h4);

 

}

function per(son){
    
    
    var fourdiv = document.createElement("div");
    fourdiv.classList.add("fourdiv");
    rightdiv.appendChild(fourdiv)

    var h1 = document.createElement("h1");
    h1.textContent = son.headng;
    fourdiv.appendChild(h1);

    var h4 = document.createElement("h4");
    h4.textContent = son.will;
    fourdiv.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.textContent = son.open;
    fourdiv.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.textContent = son.team;
    fourdiv.appendChild(h4);

    var h4 = document.createElement("h4");
    h4.textContent = son.work;
    fourdiv.appendChild(h4);

 

}






    
    
    
    
    
