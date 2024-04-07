import React, { useState, useContext, useEffect } from 'react'
import { MenuDataContext } from '../../contexts/MenuDataContext'
import { ReactComponent as HeartIcon } from '../../assets/icons/heart-icon-hand_draw.svg'

const LikeButton = ({ itemId }) => {
  const { paninisData, setPaninisData, gratinsData, setGratinsData } =
    useContext(MenuDataContext)

  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const paninisItems = paninisData.items || []
    const gratinsItems = gratinsData.items || []
    const combinedData = [...paninisItems, ...gratinsItems]

    const item = combinedData.find((item) => item.id === itemId)
    if (item) {
      setLikes(item.likes)
    }
  }, [itemId, paninisData, gratinsData])

  const toggleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1
    setIsLiked(!isLiked)
    setLikes(newLikes)

    const updateData = (data, setData) => {
      const newData = {
        ...data,
        items: data.items.map((item) => {
          if (item.id === itemId) {
            return { ...item, likes: newLikes }
          }
          return item
        }),
      }
      setData(newData)
    }

    if (
      paninisData.items &&
      paninisData.items.some((item) => item.id === itemId)
    ) {
      updateData(paninisData, setPaninisData)
    } else if (
      gratinsData.items &&
      gratinsData.items.some((item) => item.id === itemId)
    ) {
      updateData(gratinsData, setGratinsData)
    }
  }

  return (
    <button onClick={toggleLike} className="like-button">
      <HeartIcon />
      <span>{likes}</span>
    </button>
  )
}

export default LikeButton
