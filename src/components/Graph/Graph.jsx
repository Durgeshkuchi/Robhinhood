import './Graph.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { x: 1, y: 9 },
  { x: 2, y: 8 },
  { x: 3, y: 7 },
  { x: 4, y: 10 },
  { x: 5, y: 6 },
  { x: 6, y: 5 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 3 },
  { x: 10, y: 2 },
  { x: 11, y: 1 },
  { x: 12, y: 3 },
  { x: 13, y: 4 },
  { x: 14, y: 6 },
  { x: 15, y: 5 },
  { x: 16, y: 8 },
  { x: 17, y: 7 },
  { x: 18, y: 9 },
  { x: 19, y: 11 },
  { x: 20, y: 10 },
]

const Graph = () => (
  <div className="graph" style={{ width: '100%', height: '100%' }}>
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      >
        <Tooltip />
        <XAxis dataKey="x" hide />
        <YAxis hide />
        <Line type="monotone" dataKey="y" stroke="#1DCF5B" />
      </LineChart>
    </ResponsiveContainer>
  </div>
)

export default Graph
