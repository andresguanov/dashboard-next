import { useEffect, useState } from 'react'
import FormProduct from '@components/FormProduct'
import { useRouter } from 'next/router'
import axios from 'axios'
import endPoints from '@services/api'

const Edit = (): JSX.Element => {
  const [product, setProduct] = useState({})
  const router = useRouter()

  useEffect(() => {
    const { id } = router.query

    if (!router.isReady) return
    async function getProduct() {
      const { data } = await axios.get(endPoints.products.getProduct(id))
      setProduct(data)
    }
    getProduct()
  }, [router?.isReady])

  return <FormProduct product={product} />
}

export default Edit
