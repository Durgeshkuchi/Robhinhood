import { LineChart } from '@mui/x-charts/LineChart';
import './Graph.css';

export default function Graph() {
  return (
    <div className="graph">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] }]}
          series={[
            {
              data: [2, 4, 5.5, 5, 4.5, 2, 7, 8.5, 1.5, 5],
            },
          ]}
          height={400}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        />
    </div>
  );
}
