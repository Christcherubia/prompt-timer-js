// Demander le nom de l'utilisateur avec un prompt
const userName = prompt("quel est ton nom ?");

// Vérifier si l'utilisateur à saisi un nom
if (userName) {
  setTimeout(() => {
    alert(`Bienvenue à toi ${userName}`);
  }, 1800);
} else {
  // Si l'utilisateur n'à rien saisi, afficher un message par défaut
  setInterval(() => {
    alert(`Bonjour, veuillez raffraichir cette page et saisir votre nom...`);
  }, 1750);
}
