const btn = document.getElementById("downloadBtn");

btn?.addEventListener("click", () => {
  document.getElementById("downloads").scrollIntoView({behavior:"smooth"});
});

function fakeDownload(){
  alert("NightyHack Loader download starting...");
}