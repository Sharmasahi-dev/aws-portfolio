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
            label: `
                <div style="
                    background: rgba(0,0,0,0.85);
                    padding: 10px 16px;
                    border-radius: 12px;
                    color: white;
                    font-size: 14px;
                    font-family: Arial;
                    border: 1px solid rgba(255,255,255,0.1);
                ">
                    📍 Saitama, Japan 🇯🇵
                </div>
            `
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

        .pointAltitude(0.02)

        .pointRadius(0.18)

        .pointColor('color')

        .htmlElementsData(locations)

        .htmlLat('lat')

        .htmlLng('lng')

        .htmlElement(d => {

        const el = document.createElement('div');

        el.innerHTML = d.label;

        return el;

        });

    /* SIZE */

    world.width(globeContainer.offsetWidth);

    world.height(340);

    /* AUTO ROTATE */

    world.controls().autoRotate = true;

    world.controls().autoRotateSpeed = 0.7;

    /* DISABLE ZOOM */

    world.controls().enableZoom = false;

}
/* CONTACT FORM */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value
    };

    try {

        const response = await fetch(
            "YOUR_API_GATEWAY_ENDPOINT",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );

        if (response.ok) {

            alert("Message Sent Successfully!");

            contactForm.reset();

        } else {

            alert("Failed to send message.");
        }

    } catch (error) {

        alert("Something went wrong.");
    }

});