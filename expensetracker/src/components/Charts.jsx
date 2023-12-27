import Chart from 'react-apexcharts'

const options = {
  labels: ["Income", "Expense"],
  colors: ["#1b3fe0","#f3463a"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#0f2ebc","#f24e42"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};


const Charts = ({expense = 100,income =100}) => {
  return (
   <Chart
   options={options}
   series={[income,expense]}
   type='pie'
   width={'100%'}
   height={'100%'}/>
  )
}

export default Charts
