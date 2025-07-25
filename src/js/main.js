/* global Chart, coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template main.js
 * Licensed under MIT (https://github.com/coreui/coreui-free-bootstrap-admin-template/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// Disable the on-canvas tooltip
Chart.defaults.pointHitDetectionRadius = 1
Chart.defaults.plugins.tooltip.enabled = false
Chart.defaults.plugins.tooltip.mode = 'index'
Chart.defaults.plugins.tooltip.position = 'nearest'
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips
Chart.defaults.defaultFontColor = coreui.Utils.getStyle('--cui-body-color')

document.documentElement.addEventListener('ColorSchemeChange', () => {
  cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary')
  cardChart2.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-info')
  mainChart.options.scales.x.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainChart.options.scales.x.ticks.color = coreui.Utils.getStyle('--cui-body-color')
  mainChart.options.scales.y.border.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainChart.options.scales.y.grid.color = coreui.Utils.getStyle('--cui-border-color-translucent')
  mainChart.options.scales.y.ticks.color = coreui.Utils.getStyle('--cui-body-color')

  cardChart1.update()
  cardChart2.update()
  mainChart.update()
})

const random = (min, max) =>
  Math.floor((Math.random() * (max - min + 1)) + min)

const cardChart1 = new Chart(document.getElementById('card-chart1'), {
  type: 'line',
  data: {
    labels: ['2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Nombre de projets réalisés',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-success'),
        data: [2, 5, 8, 4]
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: 0,
        max: 10,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

const cardChart2 = new Chart(document.getElementById('card-chart2'), {
  type: 'line',
  data: {
    labels: ['2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: 'Mois en entreprise',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,255,255,.55)',
        pointBackgroundColor: coreui.Utils.getStyle('--cui-info'),
        data: [0, 1, 5, 7]
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        min: -2,
        max: 9,
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart3 = new Chart(document.getElementById('card-chart3'), {
  type: 'line',
  data: {
    labels: ['BAC','S1', 'S2', 'S3', 'S4', 'S5', 'S6'],
    datasets: [
      {
        label: 'Moyenne générale',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [13.47, 12.49, 13.76, 12.5, 0, 15.8, 15.9],
        fill: true
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
})

// eslint-disable-next-line no-unused-vars
const cardChart4 = new Chart(document.getElementById('card-chart4'), {
  type: 'bar',
  data: {
    labels: ['2023', '2024', '2025'],
    datasets: [
      {
        label: 'Crédits ECTS validés',
        backgroundColor: 'rgba(255,255,255,.2)',
        borderColor: 'rgba(255,255,255,.55)',
        data: [60,60,60],
        barPercentage: 0.6
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false

        },
        ticks: {
          display: false
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
})

const mainChart = new Chart(document.getElementById('main-chart'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: `rgba(${coreui.Utils.getStyle('--cui-info-rgb')}, .1)`,
        borderColor: coreui.Utils.getStyle('--cui-info'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200)
        ],
        fill: true
      },
      {
        label: 'My Second dataset',
        borderColor: coreui.Utils.getStyle('--cui-success'),
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: [
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200),
          random(50, 200)
        ]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 95,
            yMax: 95,
            borderColor: coreui.Utils.getStyle('--cui-danger'),
            borderWidth: 1,
            borderDash: [8, 5]
          }
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent'),
          drawOnChartArea: false
        },
        ticks: {
          color: coreui.Utils.getStyle('--cui-body-color')
        }
      },
      y: {
        border: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent')
        },
        grid: {
          color: coreui.Utils.getStyle('--cui-border-color-translucent')
        },
        ticks: {
          beginAtZero: true,
          color: coreui.Utils.getStyle('--cui-body-color'),
          max: 250,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5)
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }
})
