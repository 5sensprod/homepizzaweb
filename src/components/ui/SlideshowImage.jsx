import React from 'react'
import slideShowImage from '../../assets/illustrations/slideShow_1.webp'
import '../../styles/components/slideshowImage.scss' // Import du fichier SCSS

const SlideshowImage = () => (
  <img src={slideShowImage} alt="Slideshow" className="slideshow-image" />
)

export default SlideshowImage
