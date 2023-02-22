import ChartsEmbedSDK  from "@mongodb-js/charts-embed-dom";
import { useEffect, useRef, useState } from "react";

const Chart = ({chartId, height, width}) => {
    const chartSDK = new ChartsEmbedSDK({baseUrl: 'https://charts.mongodb.com/charts-project-0-aiggw'});
    const [chart] = useState(
        chartSDK.createChart({
            chartId: chartId,
            height: height,
            width: width
        })
    );
    const chartDiv = useRef(null);
    const [rendered, setRendered] = useState(false);

    useEffect(() => {
        chart.render(chartDiv.current)
        .then(() => 
            setRendered(true)
        )
        .catch(
            error => console.log("something went wrong during chart rendering: ", error)
        )
    }, [chart]);

    return (
        <div className="chart" ref={chartDiv}></div>
    )
};

export default Chart;