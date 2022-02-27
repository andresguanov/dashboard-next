import ProductsTable from '@components/ProductsTable'
import Modal from '@common/Modal'
import useFetch from '@hooks/useFetch'
import endPoints from '@services/api'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import FormProduct from '@components/FormProduct'

const Products = () => {
  const [open, setOpen] = useState<boolean>(false)
  const products: Product[] = useFetch(
    endPoints.products.getProducts(),
  )

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">List of Products</h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpen(true)}
            >
              <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
      <ProductsTable products={products} />
      <Modal open={open} setOpen={setOpen}>
        <FormProduct />
      </Modal>
    </>
  )
}

export default Products
