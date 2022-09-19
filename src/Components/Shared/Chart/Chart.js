import React from 'react';
import ChartBars from './ChartBars';
import './Chart.css'
const Chart = props => {
    const Values = props.dataPoints.map((val) => val.value);
    const maxValue = Math.max(...Values)
    return (
        <div className='chart'>
            {
                props.dataPoints.map((point) => (
                    <ChartBars 
                        key={point.label}
                        label={point.label}
                        value={point.value}
                        maxValue={maxValue}
                    />
                ))
            }


        </div>);
};

export default Chart;