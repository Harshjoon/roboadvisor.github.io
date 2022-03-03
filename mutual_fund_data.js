let mutualFundData = [
   {
    profile: 'Defensive',
    funds: [
     {name: 'Canara Robeco Bluechip Equity Fund', stDev: 18.66, percentage:25},
     {name: 'Nippon India Corporate Bond Fund', stDev: 1.55, percentage:75}
    ],
    expectedReturn: 9.92,
    stDev:5.8275
   },
   {
    profile: 'Conservative',
    funds: [
     {name: 'ICICI Prudential Value Discovery Fund', stDev: 19.83, percentage:15},
     {name: 'Canara Robeco Bluechip Equity Fund', stDev: 18.66, percentage:25},
     {name: 'Nippon India Corporate Bond Fund', stDev: 1.55, percentage:60}
    ],
    expectedReturn: 10.97 ,
    stDev: 8.5695
   },
   {
    profile: 'balanced',
    funds: [
     {name: 'PGIM India Midcap Opportunities Fund', stDev: 24.45, percentage:15},
     {name: 'ICICI Prudential Value Discovery Fund', stDev: 19.83, percentage:25},
     {name: 'Canara Robeco Bluechip Equity Fund', stDev: 18.66, percentage:25},
     {name: 'Nippon India Corporate Bond Fund', stDev: 1.55, percentage:35}
    ],
    expectedReturn: 13.65,
    stDev: 13.8325
   },
   {
    profile: 'Assertive',
    funds: [
     {name: 'BOI AXA Small Cap Fund', stDev: 23.98, percentage:15},
     {name: 'PGIM India Midcap Opportunities Fund', stDev: 24.45, percentage:15},
     {name: 'ICICI Prudential Value Discovery Fund', stDev: 19.83, percentage:25},
     {name: 'Canara Robeco Bluechip Equity Fund', stDev: 18.66, percentage:25},
     {name: 'Nippon India Corporate Bond Fund', stDev: 1.55, percentage:20}
    ],
    expectedReturn:16.72,
    stDev: 17.197
   },
   {
    profile: 'Aggressive',
    funds: [
     {name: 'BOI AXA Small Cap Fund', stDev: 23.98, percentage:20},
     {name: 'PGIM India Midcap Opportunities Fund', stDev: 24.45, percentage:20},
     {name: 'ICICI Prudential Value Discovery Fund', stDev: 19.83, percentage:30},
     {name: 'Canara Robeco Bluechip Equity Fund', stDev: 18.66, percentage:30}
    ],
    expectedReturn: 19.23,
    stDev: 21.233
   },
]
console.log(mutualFundData[0].profile)
localStorage.setItem('mutualfundsdata', JSON.stringify(mutualFundData))
// let test = 'working'
// localStorage.setItem('test', test)