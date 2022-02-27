import endPoints from '@services/api'
import useFetch from '@hooks/useFetch'
import Chart from '@common/Chart'
import ProductsTable from '@components/ProductsTable'

const PRODUCT_LIMIT: number = 5
const PRODUCT_OFFSET: number = 0

const Dashboard = (): JSX.Element => {
  const products: Product[] = useFetch(
    endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET),
  )
  const categoryName = products?.map((product) => product.category)
  const categoryCount = categoryName?.map((category) => category?.name)

  const countOcurrences = (arr: string[]) => arr.reduce((
    obj: ProductsList,
    item: string,
  ) => {
    // eslint-disable-next-line no-param-reassign
    obj[item] = (obj[item] || 0) + 1
    return obj
  }, {})

  // Implicit type
  const data = {
    datasets: [{
      label: 'Categories',
      data: countOcurrences(categoryCount as string[]),
      borderWidth: 2,
      backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#f3ba2f', '#2a71d0'],
    }],
  }

  return (
    <>
      <Chart className="mt-2 mb-8" chartData={data} />
      <ProductsTable products={products} />

    </>
  )
}

export default Dashboard
