function changeImage() {
  var images = [
    "Resimler/asunday.jpg",
    "Resimler/atmoulin.jpg",
    "Resimler/BeethovenFrizi.jpg",
    "Resimler/belleginazmi.jpg",
    "Resimler/christina.jpg",
    "Resimler/cıglık.jpg",
    "Resimler/cyclops.jpg",

  ];
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  document.getElementById("randomImage").src = randomImage;
}