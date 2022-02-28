/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import endPoints from '@services/api'

const addProduct = async (product: Product): Promise<Product> => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',

    },
  }

  const response = await axios.post(
    endPoints.products.addProducts,
    product,
    config,
  )

  return response.data
}

export { addProduct }
