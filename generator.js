
var _ = require('lodash')

const START_YEAR = 1975
const END_YEAR = 2030

/*
{ 
  title: dates[0], <Date for mark>
  data: [ <data for make>
      { hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }
    ]
},

let holidays = {
  1: { // jan
    1: { // 1st
      title_km: 'ចូលឆ្នាំសកល',
      title_en: 'International New Year Day'
    }
  }
}
*/



/*
let data = []
for( let year = 0; year < YEAR_COUNT; year++ ) {
  for( let month = 1; month <= 12; $month++ ) {
    data.push(
      { 
        title: '2019-09-', 
        data: [ 
            { hour: '12am', duration: '1h', title: 'Ashtanga Yoga' }
          ]
      }
    )
  }
}
*/

/*
let HOLIDAYS = {
  1: { 1: 'international new year', 7: 'Genocide day' },
  3: { 8: 'women day' },
  4: { '14-16': 'Khmer new year' },
  5: { 1: 'labour day', '13-15': 'king birthday', 20: 'memory day' },
  6: { 1: 'children day', 18: 'Queen birthday' },
  9: { 24: 'constitutional day' },
  10: { 15: 'commenmoration day', 23: 'peace agreement day', 29: 'coronation day' },
  11: { 9: 'independence day' },
  12: { 10: 'human right day' }
}
*/
let HOLIDAYS = {
  1: [{ day: 1, title: 'international new year' }, 
      { day: 7, title: 'Genocide day' }],
  3: [{ day: 8, title: 'women day' }],
  4: [{ day: 14, title: 'Khmer new year' },
      { day: 15, title: 'Khmer new year' },
      { day: 16, title: 'Khmer new year' }],
  5: [{ day: 1, title: 'labour day'}, 
        {day: 13, title: 'king birthday'}, 
        {day: 14, title: 'king birthday'}, 
        {day: 15, title: 'king birthday'}, 
        {day: 20, title: 'memory day' }],
  6: [{ day: 1, title: 'children day'}, 
        {day: 18, title: 'Queen birthday' }],
  9: [{ day: 24, title: 'constitutional day' }],
  10: [ {day: 15, title: 'commenmoration day'}, 
        {day: 23, title: 'peace agreement day'}, 
        {day: 29, title: 'coronation day' }],
  11: [{ day: 9, title: 'independence day' }],
  12: [{ day: 10, title: 'human right day' }]
}

let years = _.range(START_YEAR, END_YEAR)
let months = _.range(1, 12 + 1)
let days = _.range(1, 31)
let data = []
let prefixZ = (v) => `${v}`.length == 1 ? `0${v}` : v

_.forEach([2019], y => {
  _.forEach(months, m => {
    _.forEach(HOLIDAYS[m], d => {
      data.push({
        title: `${y}-${prefixZ(m)}-${prefixZ(d.day)}`,
        data: [{hour: '12am', duration: '1d', title: d.title}]
      })
    })
  })
})

module.exports = { data, holidays: HOLIDAYS }
