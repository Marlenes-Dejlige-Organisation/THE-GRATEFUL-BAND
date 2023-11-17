    // JavaScript til at åbne og lukke burgermenuen
// JavaScript to open and close the burger menu
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuPunkter = document.querySelectorAll('.mobile-menu a');

burger.addEventListener('click', function () {
  this.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

menuPunkter.forEach((menuPunkt) => {
  menuPunkt.addEventListener('click', function () {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

    //FORM og validering
    const error_message = "Hey...you forgot something really important !";

function validateForm(form) {
  if (form.email.value === "") {
    showError(form.email);
  } else if (!validateEmail(form.email.value)) {
    showError(form.email, "No-no-no... dear friend, that doesn't work...");
    return false;
  } else {
    removeError(form.email);
  }

  // Hvis der ikke er nogen fejl, skjuler vi modalen, viser en bekræftelsesmeddelelse efter en lille timeout og tømmer formularen
  if (!form.querySelector('.text-error')) {
    setTimeout(function() {
      alert('Fantastic! We are looking forward to keeping you updated <3');
      form.reset(); // Tøm formularen
    }, 500);
  }
};


function showError(input, errorMessage) {
  // Tjekker om der allerede er en fejlmeddelelse ved siden af inputfeltet. Hvis der allerede er en fejlmeddelelse til stede, udføres ingen handling:
  if (!input.nextElementSibling) {
    // Ellers tilføjes CSS-klassen 'field-error' til inputfeltet for at markere fejlen:
    input.classList.add('field-error');
    // Indsætter en fejlmeddelelse ved siden af inputfeltet ved hjælp af insertAdjacentHTML-metoden.
    // Hvis errorMessage-argumentet ikke er defineret, bruges værdien af error_message-variablen i stedet.
    input.insertAdjacentHTML(
      'afterend',
      `<span class="text-error">${errorMessage || error_message}</span>`
    );
    // Lytter efter input-hændelser på inputfeltet.
    input.addEventListener('input', function() {
      // Hvis der er en fejlmeddelelse, fjernes den.
      if (input.nextElementSibling) {
        input.nextElementSibling.remove();
      }
      // Fjerner CSS-klassen 'field-error' fra inputfeltet for at fjerne fejlmarkeringen.
      input.classList.remove('field-error');
    });
  }
}


// Funktionen removeError fjerner fejlmeddelelsen og CSS-klassen for fejl fra et inputfelt.
function removeError(input) {
  if (input.nextElementSibling) {
    input.nextElementSibling.remove();
  }
  input.classList.remove('field-error');
}

// Funktionen validateEmail validerer en email-adresse ved at sammenligne den med et regular expression
// Den returnerer true, hvis email-adressen er gyldig, ellers returnerer den false.
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const myImages = ['assets/img/women-with-guitar-coverlet.jpg','assets/img/music-band-guitarist-performing-repetition-recording-studio.jpg','assets/img/pexels-josh-sorenson-995301.jpg', 'assets/img/repetition-rock-music-band-bass-guitar-player-electric-guitar-player-drummer-loft.jpg'];
const intervalTime = 3000; // Skift hvert 3. sekund (justér efter behov)
let currentIndex = 0;

function changeImage() {
    const favoriteSection = document.getElementById('favorite');
    favoriteSection.innerHTML = `<div class="image-container"><img src="${myImages[currentIndex]}" alt="Favorite Image" class="image"></div>`;
  
    // Opdater indekset til næste billede
    currentIndex = (currentIndex + 1) % myImages.length;
  }
  
  // Initial billedeændring
  changeImage();
  
  // Automatisk billedeændring med interval
  setInterval(changeImage, intervalTime);

//Modal

  function displayModal(id) {
    document.getElementById(id).style.display = "none";
  }

  function displayModal(id, src, desc) {
    document.getElementById(id).style.display = "block";
    document.getElementById("desc").innerHTML = desc;
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }