// Don't use TS because this component have a dependency that I don't know how put types
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Chart = ({ chartData, className }) => (
  <Bar
    className={className}
    data={chartData}
    options={{
      title: {
        display: true,
        text: 'Category',
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'right',
      },
    }}
  />
)

export default Chart
