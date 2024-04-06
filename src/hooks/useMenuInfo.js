import { useParams } from 'react-router-dom'
import { useMenuData } from '../contexts/MenuDataContext'

export const useMenuInfo = () => {
  const { menuType } = useParams()
  const { paninisData, gratinsData } = useMenuData()

  switch (menuType) {
    case 'paninis':
      return paninisData
    case 'gratins':
      return gratinsData
    default:
      return { items: [], title: 'Menu', price: null }
  }
}
