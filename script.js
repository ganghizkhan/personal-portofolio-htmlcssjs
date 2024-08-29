function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  let darkmode = localStorage.getItem('darkmode')
  const themeSwitches = document.querySelectorAll('#theme-switch')
  
  const enableDarkmode = () => {
      document.body.classList.add('darkmode')
      localStorage.setItem('darkmode', 'active')
  }
  
  const disableDarkmode = () => {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkmode', null)
  }
  
  if(darkmode === "active") enableDarkmode()
  

  themeSwitches.forEach(themeSwitch => {
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode');
        darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
});

function changeImage(){
  let displayImage = document.getElementById('image1')
  if(displayImage.src.match('./assets/sunset.jpg')){
    displayImage.src = './assets/nature1.jpg'
  } else{
    displayImage.src = './assets/sunset.jpg'
  }
}
