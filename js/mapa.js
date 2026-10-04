const money = n =>
new Intl.NumberFormat("es-ES", {
style: "currency",
currency: "EUR",
maximumFractionDigits: 0
}).format(n);

/* =========================
MAPA
========================= */

const map = L.map("map", {
scrollWheelZoom: true
}).setView([42.95, -2.15], 8);

L.tileLayer(
"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{
maxZoom: 19,


    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}


).addTo(map);

const markers = new Map();

/* =========================
ICONO DEL PRECIO
========================= */

function markerIcon(price){


return L.divIcon({

    className: "",

    html:
        `<div class="price-marker">
            ${money(price)}
        </div>`,

    iconSize: null,

    iconAnchor: [35, 17]

});


}

/* =========================
CREAR MARCADORES
========================= */

houses.forEach(h => {


const marker = L.marker(
    [h.lat, h.lng],
    {
        icon: markerIcon(h.price)
    }
).addTo(map);


marker.bindPopup(`

    <div class="popup-title">
        ${escapeHtml(h.name)}
    </div>

    <div>
        ${escapeHtml(h.area)}
    </div>

    <div class="popup-price">
        ${money(h.price)}
    </div>

    <a
        class="popup-link"
        href="${escapeHtml(h.page)}">

        Ver alojamiento ↗

    </a>

`);


markers.set(h.id, marker);


});

/* =========================
FILTROS
========================= */

function visibleHouses(){


let arr = houses.filter(h => {

    const q =
        document
            .getElementById("search")
            .value
            .trim()
            .toLowerCase();


    const min =
        Number(
            document
                .getElementById("people")
                .value
        );


    return (

        (!q ||
            (h.name + " " + h.area)
                .toLowerCase()
                .includes(q)
        )

        &&

        h.people >= min

    );

});


const sort =
    document
        .getElementById("sort")
        .value;


if(sort === "priceAsc"){

    arr.sort(
        (a,b) => a.price - b.price
    );

}


if(sort === "priceDesc"){

    arr.sort(
        (a,b) => b.price - a.price
    );

}


return arr;


}

/* =========================
LISTADO
========================= */

function renderList(){


const arr = visibleHouses();


document.getElementById("count").textContent =
    `${arr.length} alojamiento${arr.length === 1 ? "" : "s"}`;


document.getElementById("subtitle").textContent =
    `${houses.length} alojamientos · precios orientativos`;


const list =
    document.getElementById("list");


list.innerHTML = "";


if(!arr.length){

    list.innerHTML =
        `<div class="empty">
            No hay alojamientos que coincidan con la búsqueda.
        </div>`;

    return;

}


arr.forEach(h => {

    const el =
        document.createElement("article");


    el.className = "house";


    el.innerHTML = `

        <img
            src="${escapeHtml(h.image)}"
            alt=""
            loading="lazy"
        >

        <div>

            <h3>
                ${escapeHtml(h.name)}
            </h3>

            <div class="place">
                ⌖ ${escapeHtml(h.area)}
            </div>

            <div class="price">
                ${money(h.price)}
                <small>total*</small>
            </div>

            <div class="tags">

                <span>
                    👥 ${h.people} personas
                </span>

                <span>
                    ▤ ${h.rooms} hab.
                </span>

            </div>

        </div>

    `;


    el.addEventListener(
        "click",
        () => {

            map.flyTo(
                [h.lat, h.lng],
                10,
                {duration:.5}
            );

            markers
                .get(h.id)
                .openPopup();

        }
    );


    list.appendChild(el);

});


/* Mostrar/ocultar marcadores */

markers.forEach((marker,id) => {

    if(
        arr.some(h => h.id === id)
    ){

        if(!map.hasLayer(marker)){
            marker.addTo(map);
        }

    }else{

        if(map.hasLayer(marker)){
            map.removeLayer(marker);
        }

    }

});


}

/* =========================
SEGURIDAD HTML
========================= */

function escapeHtml(s){


return String(s).replace(
    /[&<>"']/g,

    c => ({

        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#39;"

    }[c])

);


}

/* =========================
EVENTOS
========================= */

document
.getElementById("search")
.addEventListener(
"input",
renderList
);

document
.getElementById("people")
.addEventListener(
"change",
renderList
);

document
.getElementById("sort")
.addEventListener(
"change",
renderList
);

/* =========================
INICIO
========================= */

renderList();
