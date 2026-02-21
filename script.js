function startFarewell(){
  document.getElementById("popup").style.display = "none";
  document.getElementById("videoSection").style.display = "block";
}

function enableSound(){
  const video = document.getElementById("farewellVideo");
  video.muted = false;
  video.play();
}

const video = document.getElementById("farewellVideo");

video.onended = function(){
  document.getElementById("videoSection").style.display = "none";
  document.getElementById("albumSection").style.display = "block";
  window.scrollTo(0,0);
};
