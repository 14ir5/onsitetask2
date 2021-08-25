var price =25;
var x;
window.onload=function(){
    var pr=document.createElement('div');
    pr.innerHTML="Price:"+price+"";
    document.getElementById("bd").appendChild(pr);
    pr.setAttribute("id","pr");
}
function priceupd(){
    
    document.getElementById('pr').remove();
    var pr=document.createElement('div');
    pr.innerHTML="Price:"+price+"";
    document.getElementById("bd").appendChild(pr);
    pr.setAttribute("id","pr");
}


function add(yc){
    var brg=document.getElementById('items');
    var dbrg=document.getElementById('db');
    var nw=document.createElement("div");
    brg.setAttribute("class","incr");
    if(yc.className=="let"){
        console.log('rida');
        nw.setAttribute("class","lettuce");
        brg.appendChild(nw);
        price=price+5;
        
        
    }
    else if(yc.className=="tom")
    {
        nw.setAttribute("class","tomatoes");
        brg.appendChild(nw);
        var nw2=document.createElement("div");
        nw.appendChild(nw2);
        var nw3=document.createElement("div");
        nw.appendChild(nw3);
        nw2.setAttribute("class","tomato");
        nw3.setAttribute("class","tomato");
        var nw4=document.createElement("div");
        nw.appendChild(nw4);
        nw4.setAttribute("class","tomato");
        price=price+5;

    }
    else if(yc.className=="chs")
    {
        nw.setAttribute("class","cheese");
        brg.appendChild(nw);
        price=price+15;
    }
    else if(yc.className=="mt")
    {
        nw.setAttribute("class","meat");
        brg.appendChild(nw);
        price=price+25;
    }
    priceupd();
}
function rmv(yc){
    var brg=document.getElementById('items');
    var dbrg=document.getElementById('db');
    var nw=document.createElement("div");
    brg.setAttribute("class","incr");
    if(yc.className=="let"){
         x=document.getElementsByClassName("lettuce");
        x[0].parentNode.removeChild(x[0]);
        price=price-5;
        
    }
    else if(yc.className=="tom")
    {
        x=document.getElementsByClassName("tomatoes");
        x[0].parentNode.removeChild(x[0]);
        price=price-5;
    }
    else if(yc.className=="chs")
    {
         x=document.getElementsByClassName("cheese");
        x[0].parentNode.removeChild(x[0]);
        price=price-15;
    }
    else if(yc.className=="mt")
    {
        x=document.getElementsByClassName("meat");
       x[0].parentNode.removeChild(x[0]);
        price=price-25;
    }
    priceupd();
}