import {Pie, Doughnut, Line, Bubble, PolarArea, Scatter, Radar, Bar} from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend ,ArcElement} from 'chart.js';


// Register necessary elements for Pie Chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ArcElement);

const data = {
    labels: ['Chrome', 'Safari', 'OperaMini', 'Internet Explorer'],
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100, 50],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
       
      },
    ],
  }

  const dataForBar = {
    labels: ['Category A', 'Category B', 'Category C', 'Category D'], // Y-axis labels
    datasets: [
      {
        label: 'Value', // Label for the dataset
        data: [120, 150, 90, 180], // Values for the bars
        backgroundColor: '#36A2EB', // Bar color
        
        borderRadius:10
      },
    ],
  };



  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw}`, // Customize the tooltip
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
      },
    },
    indexAxis: 'y',
    
  };


function PieChart()
{
    return(
        <>
         <div className='' >
      
      <Pie data={data}  />
      {/* <Bar data={dataForBar} options={options}/> */}
      
      
      
    </div>
        </>
    )
}


export default PieChart