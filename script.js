function startFarewell(){
  document.getElementById("popup").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

function enableSound(){
  const video = document.getElementById("farewellVideo");
  video.muted = false;
  video.play();
}
