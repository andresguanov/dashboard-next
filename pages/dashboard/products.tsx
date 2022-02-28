import ProductsTable from '@components/ProductsTable'
import Modal from '@common/Modal'
import endPoints from '@services/api'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import FormProduct from '@components/FormProduct'
import axios from 'axios'
import useAlert from '@hooks/useAlert'
import Alert from '@common/Alert'

const Products = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const { alert, setAlert, toggleAlert } = useAlert()

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(endPoints.products.allProducts)
      setProducts(response.data)
    }
    try {
      getProducts()
    } catch (error) {
      console.error(error)
    }
  }, [alert])

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="mb-8 lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List of Products</h2>
        </div>
        <div className="flex mt-5 lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpen(true)}
            >
              <PlusCircleIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
      <ProductsTable products={products} />
      <Modal open={open} setOpen={setOpen}>
        <FormProduct setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>
  )
}

export default Products
