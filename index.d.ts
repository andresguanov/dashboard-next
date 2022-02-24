/* eslint-disable no-unused-vars */
interface Navigation {
  name: string
  href: string
  current?: boolean
}

interface Token{
  'access_token': string
}

interface ProductCategory {
  id: number
  name: string
  image: string
}

interface Product {
  category: ProductCategory
  description: string
  id: number
  images: string[]
  price: number
  title: string
}
