/*=====================================================
    CAFÉ CASA QUINTANO
    JavaScript Principal
======================================================*/

//===========================
// HEADER AL HACER SCROLL
//===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

//===========================
// SCROLL SUAVE MENÚ
//===========================

document.querySelectorAll('nav a').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

//===========================
// ANIMACIÓN DE APARICIÓN
//===========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("mostrar");

}

});

},{

threshold:.20

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

//===========================
// BOTÓN VOLVER ARRIBA
//===========================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topButton.classList.add("visible");

}else{

topButton.classList.remove("visible");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

//===========================
// BOTÓN TELÉFONO
//===========================

const telefono=document.createElement("a");

telefono.href="tel:980560953";

telefono.className="telefono";

telefono.innerHTML="📞";

document.body.appendChild(telefono);

//===========================
// BOTÓN WHATSAPP
//===========================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/34980560953";

whatsapp.target="_blank";

whatsapp.className="whatsapp";

whatsapp.innerHTML="💬";

document.body.appendChild(whatsapp);

//===========================
// VALIDACIÓN FORMULARIO
//===========================

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const nombre=form.querySelector('input[type="text"]').value;

const email=form.querySelector('input[type="email"]').value;

const telefono=form.querySelector('input[type="tel"]').value;

if(nombre===""||email===""||telefono===""){

alert("Complete los campos obligatorios.");

return;

}

alert("Gracias por su solicitud de reserva. Contactaremos con usted lo antes posible.");

form.reset();

});

//===========================
// EFECTO LIGHTBOX
//===========================

const imagenes=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML="<img>";

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

imagenes.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("activo");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("activo");

});

//===========================
// EFECTO PARALLAX HERO
//===========================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

hero.style.backgroundPositionY=window.scrollY*0.5+"px";

});

//===========================
// FECHA AUTOMÁTICA
//===========================

const hoy=new Date();

const fecha=document.querySelector('input[type="date"]');

if(fecha){

let dia=hoy.getDate().toString().padStart(2,"0");

let mes=(hoy.getMonth()+1).toString().padStart(2,"0");

let anio=hoy.getFullYear();

fecha.min=`${anio}-${mes}-${dia}`;

}

//===========================
// CARGA DIFERIDA IMÁGENES
//===========================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

//===========================
// MENSAJE CONSOLA
//===========================

console.log("Café Casa Quintano ✔");
