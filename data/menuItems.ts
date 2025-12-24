import { MenuItem } from '@/store/useCart'
import menuData from './menuItems.json'

// Load menu items from JSON
export const menuItems: MenuItem[] = menuData.items.map((item: any) => ({
  id: item.id,
  name: item.name,
  description: item.description,
  price: item.price,
  category: item.category,
  tags: item.tags || [],
  image: item.image,
}))

export const categories = menuData.categories

