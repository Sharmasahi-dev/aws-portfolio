/* =========================
   3D EARTH GLOBE
========================= */

const globeContainer = document.getElementById("globeViz");

if (globeContainer) {

    /* LOCATION */

    const locations = [
        {
            lat: 35.8617,
            lng: 139.6455,
            size: 0.35,
            color: "#00ff88",
            label: "Saitama, Japan 🇯🇵"
        }
    ];

    const world = Globe()(globeContainer)

        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')

        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')

        .backgroundColor('rgba(0,0,0,0)')

        .showAtmosphere(true)

        .atmosphereColor('#3fa9ff')

        .atmosphereAltitude(0.22)

        /* LOCATION POINT */

        .pointsData(locations)

        .pointLat('lat')

        .pointLng('lng')

        .pointColor('color')

        .pointAltitude('size')

        .pointRadius(0.5)

        .pointLabel('label');

    /* SIZE */

    world.width(globeContainer.offsetWidth);

    world.height(340);

    /* AUTO ROTATE */

    world.controls().autoRotate = true;

    world.controls().autoRotateSpeed = 0.7;

    /* DISABLE ZOOM */

    world.controls().enableZoom = false;

}