import React from 'react';
import {Pie} from 'react-chartjs-2'

export default class TabStatistic extends React.Component {

    render() {
        const chartData = {
            labels: [
                'In progress',
                'Blocked',
                'To do'
            ],
            datasets: [{
                data: [this.props.numinProgress, this.props.numblocked, this.props.numTodo],
                backgroundColor: [
                    '#ff9846',
                    '#497e41',
                    '#9350b2'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]

        };
        return (<div><Pie data={chartData}/></div>);
    }
}