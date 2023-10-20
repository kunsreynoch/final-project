
document.getElementById("log").addEventListener("click",()=>{
    document.getElementById("main").style.display="flex";
   
});
document.getElementById("cancel").addEventListener("click",()=>{
    document.getElementById("main").style.display="none";
    
    
});

const logo =[
    {
        image : "image/wallpaper.jpg"
    }
];
var tit ="";
for(let i in logo){
    tit +=`
    <img src="${logo[i]["image"]}" alt="">
    
    `;
    document.getElementsByClassName("logo")[0].innerHTML=tit;
};

const pic =[
    {
        image : "image/piiii.png"
    }
];
var tot ="";
for(let i in pic){
    tot +=`
    <img src="${pic[i]["image"]}" alt="">
    
    `;
    document.getElementsByClassName("pic")[0].innerHTML=tot;
};

const pix =[
    {
        image : "image/p1.jpg"
    }
];
var tet ="";
for(let i in pix){
    tet +=`
    <img src="${pix[i]["image"]}" alt="">
    
    `;
    document.getElementsByClassName("pix")[0].innerHTML=tet;
};

const box_pic =[
    {
        image : "image/piza3.webp"
    }
];
var tyt ="";
for(let i in pix){
    tyt +=`
    <img src="${box_pic[i]["image"]}" alt="">
    
    `;
    document.getElementsByClassName("box_pic")[0].innerHTML=tyt;
};
const row =[
    {
        name : "Our company"
    },
    {
        name : "Our food"
    },
    {
        name : "Stories and News"
    },
    {
        name : "Investor Relations"
    },
    {
        name : "Customer Service"
    }
];
var lili="";
for(let i in row){
    lili +=`
    <li class="lilink">
    <a href="#">${row[i]["name"]}</a></li>
    
    `;
    document.getElementsByClassName("link")[0].innerHTML=lili;
};
const box5=[
    {
        name : "Cultlure and Values"
    },
    {
        name : "Inclusion, Diversity, and Equity"
    },
    {
        name : "College Achievement Plan"
    },
    {
        name : "U.S Careers"
    },
    {
        name : "International Career"
    }
];
var  titi ="";
for(let i in box5){
    titi +=`
    <li class="t1_t">
    <a href="#">${box5[i]["name"]}</a></li>
    
    `;
    document.getElementsByClassName("t1")[0].innerHTML=titi;
};










