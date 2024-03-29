import React, { Component } from 'react';
import { VictoryBar, VictoryAxis, VictoryChart } from 'victory';

class Chart extends Component {
    render() {
        const data = [
            {quarter: 1, earnings: 13000},
            {quarter: 2, earnings: 16500},
            {quarter: 3, earnings: 14250},
            {quarter: 4, earnings: 19000}
        ]
        return (
            <div className="Component">
                <VictoryChart
                    domainPadding={20}
                >
                    <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryBar
                        data={data}
                        x="quarter"
                        y="earnings"
                    />
                </VictoryChart>

            </div>
        )
    }
}

export default Chart;