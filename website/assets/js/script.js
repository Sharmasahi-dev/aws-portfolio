/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* =========================
   3D EARTH GLOBE
========================= */

const globeContainer = document.getElementById("globeViz");

if (globeContainer) {

    const world = Globe()(globeContainer)

        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')

        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')

        .backgroundColor('rgba(0,0,0,0)')

        .showAtmosphere(true)

        .atmosphereColor('#3fa9ff')

        .atmosphereAltitude(0.22);

    /* SIZE */

    world.width(globeContainer.offsetWidth);

    world.height(340);

    /* AUTO ROTATE */

    world.controls().autoRotate = true;

    world.controls().autoRotateSpeed = 0.8;

    /* REMOVE ZOOM */

    world.controls().enableZoom = false;

}