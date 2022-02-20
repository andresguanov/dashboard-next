export {}

const API: string | undefined = process.env.NEXT_PUBLIC_URL
const VERSION: string | undefined = process.env.NEXT_PUBLIC_API_VERSION

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id: string) => `${API}/api/${VERSION}/${id}`,
  },
}

export default endPoints
