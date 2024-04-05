import React from 'react'
import '../../styles/components/newsTicker.scss' // Assurez-vous que le chemin est correct.

const NewsTicker = () => {
  return (
    <div className="news-ticker">
      <p>En ce moment sur Home pizza...</p>
      {/* Ici, vous pouvez ajouter la logique pour afficher les actualités ou les messages défilants */}
    </div>
  )
}

export default NewsTicker
