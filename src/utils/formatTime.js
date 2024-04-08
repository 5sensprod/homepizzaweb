const formatTime = (date) => {
  // Récupère les heures et les minutes de l'objet Date
  let hours = date.getHours()
  let minutes = date.getMinutes()

  // Convertit les heures et les minutes en chaîne de caractères
  // Ajoute un zéro au début si c'est nécessaire (pour avoir toujours deux chiffres)
  hours = hours.toString().padStart(2, '0')
  minutes = minutes.toString().padStart(2, '0')

  // Renvoie l'heure formatée en HH:MM
  return `${hours}:${minutes}`
}

export default formatTime
