import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer, XAxis } from 'recharts';

const data = [
  { name: 'Group A', value: 100 },
  { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS = ['#01e472', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
        <div className=''>
            <div class="opacity-0 h-0 group-hover:opacity-100 group-hover:h-full">
     This Is The Overlay
  </div>
            
      {/* <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart> */}
     

      </div>
    );
  }
}