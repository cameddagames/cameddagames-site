function toggleLanguageMenu() {
  document.getElementById("language-menu").classList.toggle("hidden");
}

function changeLanguage(lang) {
  if (lang === 'it') {
    window.location.href = "index.html"; // Reindirizza alla versione italiana
  } else if (lang === 'en') {
    window.location.href = "index-en.html"; // Reindirizza alla versione inglese
  }
}
