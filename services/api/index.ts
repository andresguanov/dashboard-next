export {}

const API: string | undefined = process.env.NEXT_PUBLIC_API_URL
const VERSION: string | undefined = process.env.NEXT_PUBLIC_API_VERSION

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id: string) => `${API}/api/${VERSION}/${id}`,
    allProducts: `${API}/API/${VERSION}/products/`,
    getProducts: (limit: number = 5, offset:number = 0) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/api/${VERSION}/products`,
    updateProducts: (id: string) => `${API}/api/${VERSION}/products/${id}/`,
    deleteProduct: (id: string) => `${API}/api/${VERSION}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/api/${VERSION}/categories/`,
    addCategory: `${API}/api/${VERSION}/categories/`,
    getCategoryItems: (id: string) => `${API}/api/${VERSION}/categories/${id}/products/`,
    updateCategory: (id: string) => `${API}/api/${VERSION}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/api/${VERSION}/files/upload/`,
  },
}

export default endPoints
