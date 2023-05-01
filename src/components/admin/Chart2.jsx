import styled from 'styled-components'
import {
  AreaChart,
  Area,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200, Clients: 220 },
  { name: "February", Total: 2100, Clients: 250 },
  { name: "March", Total: 800, Clients: 198 },
  { name: "April", Total: 1600, Clients: 245 },
  { name: "May", Total: 900, Clients: 220 },
  { name: "June", Total: 1700, Clients: 120 },
];

const Chart2 = ({ aspect, title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              {/* <stop offset="20%" stopColor="goldenrod" stopOpacity={0.8} />
              <stop offset="80%" stopColor="#ddceb4" stopOpacity={0.3} /> */}
              {/* <stop offset="20%" stopColor="#b4c0dd" stopOpacity={0.8} />
              <stop offset="80%" stopColor="#b4c0dd" stopOpacity={0.3} /> */}
              <stop offset="20%" stopColor="#82ca9d" stopOpacity={0.8} />
              {/* <stop offset="80%" stopColor="#e53935" stopOpacity={0.3} /> */}
              <stop offset="80%" stopColor="#82ca9d" stopOpacity={0.3} />

            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <ChartGrid><CartesianGrid strokeDasharray="3 3"/></ChartGrid>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#35caca"
           //stroke="#4b3005"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="Clients"
            stroke="#9cb8ed"
            //stroke="#86110f"
            fillOpacity={1}
            // fill="url(#total)"
            fill="#b4c0dd" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};
const Container = styled.div`
    flex: 4;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
`
const Title = styled.h4`
  margin-bottom: 20px;
`
const ChartGrid = styled.div`
  stroke: rgb(228, 225, 225);
`

export default Chart2;
