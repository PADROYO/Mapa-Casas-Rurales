const money = n =>
    new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0
    }).format(n);


/* =========================
   MAPA
========================= */

const map = L.map("map");

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


const markers = new Map();

let selectedId = null;
let currentPhoto = 0;


/* =========================
   ICONO DEL PRECIO
========================= */

function markerIcon(price) {

    return L.divIcon({

        className: "",

        html: `
            <div class="price-marker">
                ${money(price)}
            </div>
        `,

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

        <button
            class="popup-link"
            type="button"
            onclick="selectHouse(${h.id})">

            Ver alojamiento

        </button>

    `);


    marker.on("click", () => {

        selectHouse(h.id);

    });


    markers.set(h.id, marker);

});


/* =========================
   CENTRAR MAPA
========================= */

const bounds = L.latLngBounds(
    houses.map(h => [h.lat, h.lng])
);

map.fitBounds(bounds, {
    padding: [50, 50]
});


/* =========================
   FILTROS
========================= */

function visibleHouses() {

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
            (
                !q ||
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


    if (sort === "priceAsc") {

        arr.sort(
            (a, b) => a.price - b.price
        );

    }


    if (sort === "priceDesc") {

        arr.sort(
            (a, b) => b.price - a.price
        );

    }


    return arr;

}


/* =========================
   LISTADO
========================= */

function renderList() {

    const arr = visibleHouses();


    document.getElementById("count").textContent =
        `${arr.length} alojamiento${arr.length === 1 ? "" : "s"}`;


    document.getElementById("subtitle").textContent =
        `${houses.length} alojamientos · precios orientativos`;


    const list =
        document.getElementById("list");


    list.innerHTML = "";


    if (!arr.length) {

        list.innerHTML = `
            <div class="empty">
                No hay alojamientos que coincidan con la búsqueda.
            </div>
        `;

        return;

    }


    arr.forEach(h => {

        const el =
            document.createElement("article");


        el.className = "house";


        /*
         * image = imagen principal de la tarjeta
         *
         * NO usamos photos aquí.
         */

        el.innerHTML = `

            <img
                src="${escapeHtml(h.image)}"
                alt="${escapeHtml(h.name)}"
                loading="lazy"
                onerror="this.style.display='none'"
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
                    {
                        duration: 0.5
                    }
                );

                selectHouse(h.id);

            }
        );


        list.appendChild(el);

    });


    /* =========================
       MOSTRAR / OCULTAR MARCADORES
    ========================= */

    markers.forEach((marker, id) => {

        if (arr.some(h => h.id === id)) {

            if (!map.hasLayer(marker)) {
                marker.addTo(map);
            }

        } else {

            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            }

        }

    });

}


/* =========================
   OBTENER FOTOS DE UNA CASA
========================= */

function getHousePhotos(house) {

    /*
     * photos = fotos del carrusel
     *
     * Si existe photos y tiene contenido,
     * usamos todas esas fotos.
     *
     * Si no existe, usamos image.
     */

    if (
        Array.isArray(house.photos) &&
        house.photos.length > 0
    ) {

        return house.photos;

    }


    if (house.image) {

        return [house.image];

    }


    return [];

}


/* =========================
   SELECCIONAR CASA
========================= */

function selectHouse(id) {

    const house =
        houses.find(h => h.id === id);


    if (!house) {
        return;
    }


    selectedId = id;
    currentPhoto = 0;


    const detail =
        document.getElementById("detail");


    if (!detail) {
        console.error("No existe el elemento #detail en index.html");
        return;
    }


    /* =========================
       FOTOS
    ========================= */

    const photos =
        getHousePhotos(house);


    console.log(
        "Casa seleccionada:",
        house.name
    );

    console.log(
        "Fotos:",
        photos
    );


    /* =========================
       CARACTERÍSTICAS
    ========================= */

    let featuresHTML = "";


    if (
        Array.isArray(house.features) &&
        house.features.length
    ) {

        featuresHTML = `

            <div class="detail-section">

                <h4>
                    Características
                </h4>

                <div class="detail-features">

                    ${house.features.map(feature => `

                        <span>
                            ${escapeHtml(feature)}
                        </span>

                    `).join("")}

                </div>

            </div>

        `;

    }


    /* =========================
       DESCRIPCIÓN
    ========================= */

    let descriptionHTML = "";


    if (house.description) {

        descriptionHTML = `

            <div class="detail-section">

                <h4>
                    Descripción
                </h4>

                <p>
                    ${escapeHtml(house.description)}
                </p>

            </div>

        `;

    }


    /* =========================
       GOOGLE MAPS
    ========================= */

    const mapsUrl =
        `https://www.google.com/maps/dir/?api=1&destination=${house.lat},${house.lng}`;


    /* =========================
       CARRUSEL
    ========================= */

    let carouselHTML = "";


    if (photos.length > 0) {

        carouselHTML = `

            <div class="detail-carousel">

                <img
                    id="detail-photo"
                    class="detail-image"
                    src="${escapeHtml(photos[0])}"
                    alt="${escapeHtml(house.name)}"
                    onerror="this.onerror=null; this.src='${escapeHtml(house.image || "")}'"
                >

                ${
                    photos.length > 1
                    ?
                    `

                    <button
                        class="carousel-prev"
                        type="button"
                        onclick="previousPhoto()"
                        aria-label="Foto anterior">

                        ‹

                    </button>


                    <button
                        class="carousel-next"
                        type="button"
                        onclick="nextPhoto()"
                        aria-label="Foto siguiente">

                        ›

                    </button>


                    <div
                        id="photo-counter"
                        class="photo-counter">

                        1 / ${photos.length}

                    </div>

                    `
                    :
                    ""
                }

            </div>

        `;

    } else {

        carouselHTML = `

            <div class="detail-carousel no-photo">

                <div class="no-photo-message">
                    No hay fotografías disponibles
                </div>

            </div>

        `;

    }


    /* =========================
       CONTENIDO
    ========================= */

    detail.innerHTML = `

        <button
            class="detail-close"
            type="button"
            aria-label="Cerrar"
            onclick="closeDetail()">

            ×

        </button>


        ${carouselHTML}


        <div class="detail-content">

            <div class="detail-location">
                ${escapeHtml(house.area)}
            </div>


            <h2>
                ${escapeHtml(house.name)}
            </h2>


            <div class="detail-price">

                ${money(house.price)}

                <span>
                    total*
                </span>

            </div>


            <div class="detail-stats">

                <div>

                    <strong>
                        👥
                    </strong>

                    <span>
                        ${house.people}
                    </span>

                    <small>
                        personas
                    </small>

                </div>


                <div>

                    <strong>
                        ▤
                    </strong>

                    <span>
                        ${house.rooms}
                    </span>

                    <small>
                        habitaciones
                    </small>

                </div>

            </div>


            ${descriptionHTML}


            ${featuresHTML}


            <div class="detail-actions">

                <a
                    href="${mapsUrl}"
                    target="_blank"
                    rel="noopener"
                    class="detail-button">

                    Cómo llegar ↗

                </a>


                ${
                    house.bookingUrl
                    ?
                    `

                    <a
                        href="${escapeHtml(house.bookingUrl)}"
                        target="_blank"
                        rel="noopener"
                        class="detail-button primary">

                        Reservar ↗

                    </a>

                    `
                    :
                    ""
                }

            </div>


            <div class="detail-note">

                * Precio orientativo. Comprueba disponibilidad
                y condiciones directamente con el alojamiento.

            </div>

        </div>

    `;


    /*
     * IMPORTANTE:
     * Activamos el panel después de insertar todo
     * su contenido.
     */

    detail.classList.add("active");


    /*
     * Forzamos que el panel sea visible.
     * Esto evita problemas si el CSS actual
     * tiene alguna regla que lo mantiene oculto.
     */

    detail.style.display = "block";


    /* =========================
       ABRIR POPUP
    ========================= */

    const marker =
        markers.get(id);


    if (marker) {
        marker.openPopup();
    }

}


/* =========================
   SIGUIENTE FOTO
========================= */

function nextPhoto() {

    const house =
        houses.find(h => h.id === selectedId);


    if (!house) {
        return;
    }


    const photos =
        getHousePhotos(house);


    if (photos.length <= 1) {
        return;
    }


    currentPhoto++;


    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }


    updatePhoto();

}


/* =========================
   FOTO ANTERIOR
========================= */

function previousPhoto() {

    const house =
        houses.find(h => h.id === selectedId);


    if (!house) {
        return;
    }


    const photos =
        getHousePhotos(house);


    if (photos.length <= 1) {
        return;
    }


    currentPhoto--;


    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }


    updatePhoto();

}


/* =========================
   ACTUALIZAR FOTO
========================= */

function updatePhoto() {

    const house =
        houses.find(h => h.id === selectedId);


    if (!house) {
        return;
    }


    const photos =
        getHousePhotos(house);


    if (!photos.length) {
        return;
    }


    const photo =
        document.getElementById("detail-photo");


    const counter =
        document.getElementById("photo-counter");


    if (photo) {

        photo.src =
            photos[currentPhoto];

    }


    if (counter) {

        counter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;

    }

}


/* =========================
   CERRAR DETALLE
========================= */

function closeDetail() {

    const detail =
        document.getElementById("detail");


    if (!detail) {
        return;
    }


    detail.classList.remove("active");


    detail.style.display = "none";


    selectedId = null;

    currentPhoto = 0;

}


/* =========================
   SEGURIDAD HTML
========================= */

function escapeHtml(s) {

    return String(s).replace(
        /[&<>"']/g,

        c => ({

            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"

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