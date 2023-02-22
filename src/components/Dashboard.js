import Chart from "./Chart";

const Dashboard = () => {
    
    return (
        <div className="charts">
            <Chart height={'400px'} width={'600px'} chartId={'63f5f115-045a-4aa4-8785-514e7d2cdcc8'}></Chart>
            <Chart height={'400px'} width={'600px'} chartId={'63f5f14b-5123-458e-8ba7-7f47120e6799'}></Chart>
            <Chart height={'400px'} width={'600px'} chartId={'63f5f339-3f54-4fba-85b6-affaabe3b5f2'}></Chart>
            <Chart height={'400px'} width={'600px'} chartId={'63f5f411-ace8-4256-8c7b-2aca3583e46f'}></Chart>
        </div>
    )
}

export default Dashboard;