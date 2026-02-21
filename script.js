function startFarewell(){
  document.getElementById("popup").style.display = "none";

  const videoSection = document.getElementById("videoSection");
  const video = document.getElementById("farewellVideo");

  videoSection.style.display = "block";

  video.currentTime = 0;
  video.muted = false;
  video.play();
}

const video = document.getElementById("farewellVideo");

video.onended = function(){
  document.getElementById("videoSection").style.display = "none";
  document.getElementById("albumSection").style.display = "block";
  window.scrollTo(0,0);
};
