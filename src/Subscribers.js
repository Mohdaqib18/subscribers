import React from "react";
import { Chart } from "react-google-charts";

const data =
    [
        ['Week', 'Sum of report.subscribersGained', 'Sum of report.subscribersLost', 'Sum of Net subscribers gained'],
        ['W14', 441, -20, 421],
        ['W15', 2000, -500, 1500],
        ['W16', 1000, -200, 800],
        ['W17', 1500, -500, 1000],
        ['W18', 1000, -300, 700],
        ['W19', 2000, -1000, 1000],
        ['W20', 3000, -500, 2500],
        ['W21', 2500, -200, 2300],
        ['W22', 4500, -500, 4000],
        ['W23', 4000, -1000, 3000],
        ['W24', 3000, -500, 2500],
        ['W25', 2500, -100, 2400],
        ['W26', 2400, -400, 2000],
        ['W27', 2000, -500, 1500],
        ['W28', 1500, -300, 1200],
        ['W29', 1200, -100, 1100],
        ['W30', 1100, -500, 600],
    ];

const options = {
    vAxis: {
        title: 'Subscribers', 
        gridlines: {
            color: 'transparent'
        },
        titleTextStyle: {bold: true},
        textStyle: {bold: true},
    },
    hAxis: { title: 'Weeks',
    titleTextStyle: {bold: true},
    textStyle: {bold: true},
    },
    seriesType: 'bars',
    isStacked: true,
    series: { 2: { type: 'line' } },
    colors: ['#b0d6b6', '#ffb3b3', '#008000'],
    legend: {
        position: 'bottom',
        textStyle: {bold: true}
    }
};

export function Subscribers() {
    return (
        <Chart
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}
