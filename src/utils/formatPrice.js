// utils/formatPrice.js

/**
 * Formate le prix en suivant les règles spécifiées.
 * @param {number} price - Le prix à formater.
 * @returns {string} Le prix formaté suivi de " €".
 */
const formatPrice = (price) => {
  // Si le prix est un entier, retourne simplement le nombre suivi de " €"
  if (Number.isInteger(price)) {
    return `${price} €`
  }

  // Convertit le prix en chaîne de caractères avec deux décimales
  let formattedPrice = price.toFixed(2)

  // Supprime les zéros inutiles à la fin
  formattedPrice = formattedPrice.replace(/\.00$/, '')

  // Remplace le point décimal par une virgule pour les conventions françaises
  formattedPrice = formattedPrice.replace('.', ',')

  return `${formattedPrice} €`
}

export default formatPrice
