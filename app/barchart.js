import * as d3 from 'd3';
import * as c3 from 'c3';

class BarChart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render() {
        var self = this;

        var padding = {
            top: 20,
            right: 40,
            bottom: 20,
            left: 100,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                columns: [
                    ['2017', 0.838741516,0.818120042,0.496946133,0.201340241,0.025271725],
                    ['2012', 0.857669542,0.760120158,0.354896754,0.11828762,0.029369059]
                ],
                type: 'bar',
                labels: {
                    format: {
                        '2017': d3.format('.0%'),
                        '2012': d3.format('.0%')
                    }
                },
                line: {
                    connectNull: true
                }
            },
            legend: {
                show: false
            },
            line: {
                connectNull: true
            },
            point: {
                show: true,
                r: function(d) {
                    if (d.x == 2018) {
                        return 6;
                    } else {
                        return 2;
                    }
                }
            },
            color: {
                pattern: ['#E07242','#AFA8C9']
            },
            axis: {
                rotated: true,
                y: {
                    max: 1,
                    min: 0, 
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    label: {
                        text: '% of renter households who were cost-burdened',
                        position: 'outer-center'
                    },
                    tick: {
                        count: 4,
                        values: [0, 0.25, 0.50, 0.75, 1],
                        format: d3.format('.0%')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    label: {
                        text: '',
                        position: 'outer-center'
                    },
                    type: 'category',
                    categories: ['<$20,000','$20,000-$34,000','$35,000-$49,000','$50,000-$74,999','$75,000+'],
                    tick: {
                        multiline: false
                    }
                }
            },
            grid: {
                focus: {
                    show: false
                },
                y: {
                    // lines: [{
                    //     value: 0.5,
                    //     text: '',
                    //     position: 'start',
                    //     class: 'powerline'
                    // }]

                }
            },
            tooltip: {
                contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
                    return '<div class="chart-tooltip gray5"><span class="tooltip-label">' + d[0].x + ':</span>' +
                        '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span></div>'
                }
            }
        });

        d3.selectAll(".c3-target-2012")
        .selectAll(".c3-bar, .c3-texts")
        .attr("transform", "translate(0, 5)");

    }

}

export {
    BarChart as
    default
}