(function () {
  const setup = (position) => {
    var mymap = L.map("mapid").setView(
      //[position.coords.latitude, position.coords.longitude],
      [44.2575183, -71.26977],
      14.5
    );

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGpicm9mIiwiYSI6ImNqMjNvZDBraTAwMjMzMm81MWcxMjA4cjIifQ.-XXQyKK7bZW7Lg4dLJ3Suw",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/outdoors-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoicGpicm9mIiwiYSI6ImNqMjNvZDBraTAwMjMzMm81MWcxMjA4cjIifQ.-XXQyKK7bZW7Lg4dLJ3Suw",
      }
    ).addTo(mymap);
  };

  setup();

  // navigator.geolocation.getCurrentPosition(setup);
})();
