import { FormEvent, useRef } from 'react'
import { addProduct, updateProduct } from '@services/api/products'
import { useRouter } from 'next/router'

const FormProduct = ({ setOpen, setAlert, product }): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null!)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<FormEvent>): void => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data: Product = {
      title: formData.get('title') as string,
      price: Number(formData.get('price')) as number,
      description: formData.get('description') as string,
      categoryId: Number(formData.get('category')) as number,
      images: [formData.get('images')?.name],
    }

    if (product) {
      updateProduct(product.id, data)
        .then(() => {
          router.push('/dashboard/products/')
        })
    } else {
      addProduct(data)
        .then(() => {
          setAlert({
            active: true,
            message: 'Product added successfully',
            type: 'success',
            autoClose: false,
          })
          setOpen(false)
        }).catch((error) => {
          setAlert({
            active: true,
            message: error.message,
            type: 'error',
            autoClose: false,
          })
          setOpen(false)
        })
    }
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input defaultValue={product?.title} type="text" name="title" id="title" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input defaultValue={product?.price} type="number" name="price" id="price" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="col-span-6">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                defaultValue={product?.category}
                id="category"
                name="category"
                autoComplete="category-name"
                className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="1">Clothes</option>
                <option value="2">Electronics</option>
                <option value="3">Furniture</option>
                <option value="4">Toys</option>
                <option value="5">Others</option>
              </select>
            </div>

            <div className="col-span-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                defaultValue={product?.description}
                name="description"
                id="description"
                autoComplete="description"
                rows="3"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm form-textarea focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="col-span-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input defaultValue={product?.images} id="images" name="images" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormProduct
