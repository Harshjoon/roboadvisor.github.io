const resultContainer = document.getElementById('results')
const scoreDetail = document.getElementById('score-detail')
const category_section = document.getElementById('category')
const fundsListSection = document.getElementById('funds-list')
const returns = document.getElementById('return')

score = localStorage.getItem('score')
fundsData = JSON.parse(localStorage.getItem('mutualfundsdata'))
category, index = scoreToCategory(score)

console.log(fundsData[index].expectedReturn)

returns.append(String(fundsData[index].expectedReturn) + '%')
scoreDetail.append(': '+String(score))
category_section.append('Robo Advisor recomends ' + category + ' Investing profile for you.')

fundsListSection.append()
displayFunds(fundsData[index])
showChart(fundsData[index])

function displayFunds(category){
    category.funds.forEach( fund => {
        const heading = document.createElement('h3')
        heading.innerText = fund.name
        heading.classList.add('btn-hero')
        fundsListSection.appendChild(heading)   
    })
}

function showChart(category){
    percentLabels = getFundsPercentageData(category)[0]
    percentData = getFundsPercentageData(category)[1]
    
    console.log(percentData.join().split(','))
    colorLabels = [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(55, 205, 186)',
        'rgb(255, 5, 86)'
      ]
    colorLabels = colorLabels.slice(0, percentData.length)
    
    const data = {
        labels: percentLabels,
        datasets: [{
          label: 'Mutual funds',
          data: percentData,
          backgroundColor: colorLabels,
          hoverOffset: 4
        }]
      };
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            scales: {
            },
        plugins: {
            tooltips: {
                enabled: false
              },
            datalabels: {
              formatter: (value, ctx) => {
                const datapoints = ctx.chart.data.datasets[0].data
                const total = datapoints.reduce((total, datapoint) => total + datapoint, 0)
                const percentage = value / total * 100
                return percentage.toFixed(2) + "%";
              },
              color: '#fff',
            }
           }
          },
        plugins: [ChartDataLabels]
        // plugins: {
        //     datalabels: {
        //       formatter: (value, ctx) => {
        
        //         let sum = ctx.dataset._meta[0].total;
        //         let percentage = (value * 100 / sum).toFixed(2) + "%";
        //         return percentage;
        
        
        //       },
        //       color: '#fff',
        //     }
        //   }
        // options: {
        //     plugins: {
        //         legend: {
        //             labels: {
        //                 // This more specific font property overrides the global property
        //                 font: {
        //                     size: screen.width/400
        //                 }
        //             }
        //         }
        //     }
        // }
    };
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}

function getFundsPercentageData(category){
    data = []
    dataLabels = []
    category.funds.forEach( fund => {
        dataLabels.push(fund.name)
        data.push(fund.percentage)
    })
    console.log(dataLabels.length)
    return [dataLabels, data]
}


function scoreToCategory(points) {
    category = ''
    index = null
    switch (true) {
        case (points <= 12):
            category = 'a Defensive';
            index = 0;
            break;
        case (points > 12 && points <= 24 ):
            category = 'a Conservative';
            index = 1;
            break;
        case (points > 24 && points <= 36 ):
            category = 'a Balanced';
            index = 2;
            break;
        case (points > 36 && points <= 48 ):
            category = 'an Assertive';
            index = 3;
            break;
        case (points > 48):
            category = 'an Aggressive';
            index = 4;
            break;
    }
    return category, index 

}

function scoreToFunds(points) {
    funds = []
    switch (true) {
        case (points <= 12):
            funds = fundsData[0];
            break;
        case (points > 12 && points <= 24 ):
            funds = fundsData[1];
            break;
        case (points > 24 && points <= 36 ):
            funds = fundsData[2];
            break;
        case (points > 36 && points <= 48 ):
            funds = fundsData[3];
            break;
        case (points > 48):
            funds = fundsData[4];
            break;
    }
    return funds
}
