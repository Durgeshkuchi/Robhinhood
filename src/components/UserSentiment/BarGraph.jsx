import { rgbToHex } from '@mui/material'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts'

const data = [
  { name: -5, value: 2 },
  { name: -4, value: 5 },
  { name: -3, value: 2 },
  { name: -2, value: 4 },
  { name: -1, value: 3 },
  { name: 1, value: 3.8 },
  { name: 2, value: 7 },
  { name: 3, value: 6 },
  { name: 4, value: 9 },
  { name: 5, value: 10 },
]

const BarGraph = () => {
  const getBarColor = (entry) => {
    const name = Number(entry.name)
    const { value } = entry
    if (name == -5 && value == 2) return 'rgb(231, 191, 193)'
    if (name == -4 && value == 5) return 'rgb(210, 127, 130)'
    if (name == -3 && value == 2) return 'rgb(231, 191, 193'
    if (name == -2 && value == 4) return 'rgb(217, 148, 151)'
    if (name == -1 && value == 3) return 'rgb(224, 169, 171)'
    if (name == 1 && value == 3.8) return 'rgb(163, 229, 178)'
    if (name == 2 && value == 7) return 'rgb(118, 214, 133)'
    if (name == 3 && value == 6) return 'rgb(131, 218, 147)'
    if (name == 4 && value == 9) return 'rgb(106, 209, 118)'
    if (name == 5 && value == 10) return 'rgb(97, 204, 105)'
    return '#60b95d' // Dark green
  }

  const CustomTick = (props) => {
    const { x, y, payload } = props
    if (payload.value === -5 || payload.value === 5) {
      return (
        <text x={x} y={y + 10} fill="#666" textAnchor="middle">
          {payload.value}
        </text>
      )
    }
    return null
  }

  return (
    <div style={{ width: '100%', height: 200 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 5 }}
        >
          <Tooltip />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={<CustomTick />}
          />
          <ReferenceLine
            x="2.5"
            stroke="black"
            label={{ position: 'top', value: '2.66' }}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getBarColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarGraph
