import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Jan", New_Sales: 70, Recurring: 50 },
    { name: "Feb", New_Sales: 30, Recurring: 25 },
    { name: "Mar", New_Sales: 20, Recurring: 40 },
    { name: "Apr", New_Sales: 40, Recurring: 30 },
    { name: "May", New_Sales: 45, Recurring: 70 },
    { name: "Jun", New_Sales: 60, Recurring: 80 },
    { name: "Jul", New_Sales: 55, Recurring: 50 },
    { name: "Aug", New_Sales: 80, Recurring: 45 },
    { name: "Sep", New_Sales: 70, Recurring: 35 },
    { name: "Oct", New_Sales: 120, Recurring: 60 },
    { name: "Nov", New_Sales: 75, Recurring: 100 },
    { name: "Dec", New_Sales: 70, Recurring: 55 },
];

const Charts = () => {
    return (
        <>
            <div className="chart_wrap">
                <div className="sales_overview d-flex align-items-center">
                    <div className="flex-grow-1">
                        <h6 className="overview_content">
                            Sales Overview
                            <i className="ri-arrow-up-line"></i>
                            <span className="more">4% More in 2022</span>
                        </h6>
                    </div>

                    <div className="flex-shrink-0 align-self-center">
                        <ul>
                            <li>
                                <span>This Month</span>
                                <h6 className="this-month">$86,589</h6>
                            </li>
                            <li>
                                <span>Last Month</span>
                                <h6>$86,589</h6>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="chart_area">
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="New_Sales" stroke="#7431F9" />
                            <Line type="monotone" dataKey="Recurring" stroke="#FF414B" strokeDasharray="3 4 5 2" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default Charts;
