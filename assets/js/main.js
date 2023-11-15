    // JavaScript til at åbne og lukke burgermenuen
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', function () {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });

    //FORM og validering
    const error_message = "Du skal skrive noget...";

function validateForm(form) {
  if (form.email.value === "") {
    showError(form.email);
  } else if (!validateEmail(form.email.value)) {
    showError(form.email, 'Ugyldig email-adresse.');
    return false;
  } else {
    removeError(form.email);
  }

  // Hvis der ikke er nogen fejl, skjuler vi modalen, viser en bekræftelsesmeddelelse efter en lille timeout og tømmer formularen
  if (!form.querySelector('.text-error')) {
    setTimeout(function() {
      alert('TAK! Du er tilmeldt');
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