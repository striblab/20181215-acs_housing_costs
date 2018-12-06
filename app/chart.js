import * as d3 from 'd3';
import * as c3 from 'c3';

class Chart { 

  constructor(target) {
    this.target = target;
    this.chartCounts = null;
  }


  do_step1() {
    var self = this;
              self.chartCounts.load({
                  columns: [
                          ['DFL',154,163,142,162,168,160,167,153,158,204]
                  ],
                  unload: ['RACES']
              });
  }

  undo_step1() {
    var self = this;
              self.chartCounts.load({
                  columns: [
                          ['RACES',143,146,142,147,143,146,144,147,142,148]
                  ],
                  unload: ['DFL']
              });

  }


  do_step2() {
    var self = this;
              self.chartCounts.load({
                  columns: [
                          ['GOP',150,159,142,152,160,158,162,166,152,171]
                  ],
                  // unload: ['data2', 'data3'],
              });
  }

  undo_step2() {
    var self = this;
              self.chartCounts.load({
                  unload: ['GOP']
              });
  }


  do_step3() {
    var self = this;
              self.chartCounts.load({
                  columns: [
                          ['IND',62,68,40,30,30,33,27,29,14,17]
                  ],
                  // unload: ['data2', 'data3'],
              });
  }

  undo_step3() {
    var self = this;
              self.chartCounts.load({
                  unload: ['IND']
              });
  }

  do_step4() {
    var self = this;
              self.chartCounts.load({
                  columns: [
                          ['RACES',143,146,142,147,143,146,144,147,142,148]
                  ]
              });
  }

  undo_step4() {
    var self = this;
                  self.chartCounts.load({
                  unload: ['RACES']
              });
  }


  render() {
    var self = this;

    var  padding = {
          top: 20,
          right: 40,
          bottom: 20,
          left: 40,
      };
    
    self.chartCounts = c3.generate({
        bindto: self.target,
        padding: padding,
        data: {
              x: 'x',
              columns: [
                  ['x',2000,2002,2004,2006,2008,2010,2012,2014,2016,2018,2020],
                  // ['RACES',143,146,142,147,143,146,144,147,142,148],
                  ['DFL',154,163,142,162,168,160,167,153,158,204,null],
                  ['GOP',150,159,142,152,160,158,162,166,152,171,null],
                  ['IND',62,68,40,30,30,33,27,29,14,17,null]
              ],
          type: 'spline',
          // groups: [['DFL', 'GOP','IND']],
          labels: {
              format: {
                  // 'DFL': d3.format(',.0f'),
                  // 'GOP': d3.format(',.0f'),
                  // 'IND': d3.format(',.0f')
              }
          },
          transition: {
              duration: 400
          },
          types: {
            'RACES': 'spline'
          },
          colors: {
            'DFL': '#0258A0',
            'GOP': '#C0272D',
            'IND': '#fee090',
            'RACES': '#333333'
          }
        },
          tooltip: {
              show: false
          },
          legend: {
            show: false
          },
          point: {
              show: true,
              r: function(d) { if (d.x == 2018) { return 6;} else { return 0; } }
          },
          axis: {
                // rotated: true,
                y: {
                      max: 250,
                      min: 0,
                      padding: {bottom: 0, top: 0},
                      tick: {
                       count: 4,
                       values: [0,50,100,150,200,250],
                       format: d3.format(',.0f')
                      }
                  },
              x: {
                padding: {right: 0, left: 0},
                      tick: {
                       count: 10,
                       values: [2000,2002,2004,2006,2008,2010,2012,2014,2016,2018,2020],
                       format: d3.format('.0f'),
                       rotate: -75,
                       multiline: false
                      },
                      height: 40
              }
          },
        grid: {
          // y: {
          //     lines: [{
          //         value: 392,
          //         text: '392 candidates filed',
          //         position: 'middle',
          //         class: 'powerline'
          //     }]
          // }
       }
  });
 
}
}

export { Chart as default }