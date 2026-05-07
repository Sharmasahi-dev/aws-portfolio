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

    const world = Globe()

    (globeContainer)

    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')

    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')

    .backgroundColor('#000000')

    .showAtmosphere(true)

    .atmosphereColor('#3fa9ff')

    .atmosphereAltitude(0.25);

    world.controls().autoRotate = true;

    world.controls().autoRotateSpeed = 0.7;

}