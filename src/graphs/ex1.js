import React from 'react';
import {VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel} from 'victory';

// class LineChart extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <VictoryChart style={{border:"1px solid black"}} theme={VictoryTheme.grayscale}> */}
//           {/* <VictoryAxis  /> */}
//
//           {/* <VictoryLine
//             data={[
//               {time: "11:30", percentage: 0},
//               {time: "12:00", percentage: 1},
//               {time: "12:30", percentage: 0},
//               {time: "1:00", percentage: 1},
//               {time: "1:30", percentage: 0},
//               {time: "2:00", percentage: 1},
//               {time: "2:30", percentage: 0},
//               {time: "3:00", percentage: 2},
//               {time: "3:30", percentage: 2},
//               {time: "4:00", percentage: 2.5},
//               {time: "4:30", percentage: 2.5},
//
//             ]}
//             style={{
//               data: {stroke: "rgb(25, 204, 215)", strokeWidth:6, },
//               labels: {fontSize: 6},
//               parent: {border: "1px solid #ccc"}
//             }}
//             x="time"
//             y="percentage"
//
//           />
//
//           <VictoryLine
//             data={[
//               {time: "11:30", percentage: 2.5},
//               {time: "12:00", percentage: 2.5},
//               {time: "12:30", percentage: 2},
//               {time: "1:00", percentage: 2},
//               {time: "1:30", percentage: 1},
//               {time: "2:00", percentage: 1.5},
//               {time: "2:30", percentage: 0},
//               {time: "3:00", percentage: 1},
//               {time: "3:30", percentage: 0},
//               {time: "4:00", percentage: 1},
//               {time: "4:30", percentage: 0},
//
//             ]}
//             style={{
//               data: {stroke: "red", strokeWidth:6, },
//               labels: {fontSize: 6},
//               parent: {border: "1px solid #ccc"}
//             }}
//             x="time"
//             y="percentage"
//
//           />
//         </VictoryChart> */}
//
//
//
//         <VictoryChart theme={VictoryTheme.grayscale} width={150} height={150}>
//         <VictoryAxis
//           tickValues={["130", "230", "330"]}
//           style={{
//           axis: {stroke: "purple"},
//           // axisLabel: {fontSize: 16, padding: 20},
//
//           ticks: {stroke: "grey"},
//
//           tickLabels: {fontSize: 4, padding: 5}
//           }}
//
//         />
//         <VictoryAxis
//             dependentAxis={true}
//             style={{tickLabels: {fontSize:4}
//           }}
//         />
//           <VictoryLine
//             data={[
//               {time: "11:30", percentage: 0},
//               {time: "12:00", percentage: 1},
//               {time: "12:30", percentage: 0},
//               {time: "1:00", percentage: 1},
//               {time: "1:30", percentage: 0},
//               {time: "2:00", percentage: 1},
//               {time: "2:30", percentage: 0},
//               {time: "3:00", percentage: 2},
//               {time: "3:30", percentage: 2},
//               {time: "4:00", percentage: 2.5},
//               {time: "4:30", percentage: 2.5},
//
//             ]}
//             style={{
//               data: {stroke: "rgb(25, 204, 215)", strokeWidth:2 },
//             }}
//             x="time"
//             y="percentage"
//
//           />
//
//           <VictoryLine
//             data={[
//               {time: "11:30", percentage: 2.5},
//               {time: "12:00", percentage: 2.5},
//               {time: "12:30", percentage: 2},
//               {time: "1:00", percentage: 2},
//               {time: "1:30", percentage: 1},
//               {time: "2:00", percentage: 1.5},
//               {time: "2:30", percentage: 0},
//               {time: "3:00", percentage: 1},
//               {time: "3:30", percentage: 0},
//               {time: "4:00", percentage: 1},
//               {time: "4:30", percentage: 0},
//
//             ]}
//             style={{
//               data: {stroke: "red", strokeWidth:2, },
//               labels: {fontSize: 2},
//               parent: {border: "1px solid #ccc"}
//             }}
//             x="time"
//             y="percentage"
//
//           />
//         </VictoryChart>
//       </div>
//
//     )
//   }
// }
class LineChart extends React.Component {
  render() {
   const styles = this.getStyles();
   const dataSetOne = this.getDataSetOne();
   const dataSetTwo = this.getDataSetTwo();
   const tickValues = this.getTickValues();

   return (
     <svg style={styles.parent} viewBox="0 0 450 350">

       {/* Create stylistic elements */}
       <rect x="0" y="0" width="10" height="30" fill="#f01616"/>
       {/* these do the little red box and outline for the number 1 top of the chart */}
       <rect x="420" y="10" width="20" height="20" fill="#458ca8"/>

       {/* Define labels */}
       <VictoryLabel x={25} y={24} style={styles.title}
         text="An outlook"
       />
       <VictoryLabel x={430} y={20} style={styles.labelNumber}
         text="1"
       />
       <VictoryLabel x={25} y={55} style={styles.labelOne}
         text={"Economy \n % change on a year earlier"}
       />
       <VictoryLabel x={425} y={55} style={styles.labelTwo}
         text={"Dinosaur exports\n $bn"}
       />

       <g transform={"translate(0, 40)"}>
         {/* Add shared independent axis */}
         <VictoryAxis
           scale="time"
           standalone={false}
           style={styles.axisYears}
           tickValues={tickValues}
           tickFormat={
             (x) => {
               if (x.getFullYear() === 2000) {
                 return x.getFullYear();
               }
               if (x.getFullYear() % 5 === 0) {
                 return x.getFullYear().toString().slice(2);
               }
             }
           }
         />

         {/*
           Add the dependent axis for the first data set.
           Note that all components plotted against this axis will have the same y domain
         */}
         <VictoryAxis dependentAxis
           domain={[-10, 15]}
           offsetX={50}
           orientation="left"
           standalone={false}
           style={styles.axisOne}
         />

         {/* Red annotation line */}
         <VictoryLine
           data={[
             {x: new Date(1999, 1, 1), y: 0},
             {x: new Date(2014, 6, 1), y: 0}
           ]}
           domain={{
             x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
             y: [-10, 15]
           }}
           scale={{x: "time", y: "linear"}}
           standalone={false}
           style={styles.lineThree}
         />

         {/* dataset one */}
         <VictoryLine
           data={dataSetOne}
           domain={{
             x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
             y: [-10, 15]
           }}
           interpolation="monotoneX"
           scale={{x: "time", y: "linear"}}
           standalone={false}
           style={styles.lineOne}
         />

         {/*
           Add the dependent axis for the second data set.
           Note that all components plotted against this axis will have the same y domain
         */}
         <VictoryAxis dependentAxis
           domain={[0, 50]}
           orientation="right"
           standalone={false}
           style={styles.axisTwo}
         />

         {/* dataset two */}
         <VictoryLine
           data={dataSetTwo}
           domain={{
             x: [new Date(1999, 1, 1), new Date(2016, 1, 1)],
             y: [0, 50]
           }}
           interpolation="monotoneX"
           scale={{x: "time", y: "linear"}}
           standalone={false}
           style={styles.lineTwo}
         />
       </g>
     </svg>
   );
 }

 getDataSetOne() {
   return [
     {x: new Date(2000, 1, 1), y: 12},
     {x: new Date(2000, 6, 1), y: 10},
     {x: new Date(2000, 12, 1), y: 11},
     {x: new Date(2001, 1, 1), y: 5},
     {x: new Date(2002, 1, 1), y: 4},
     {x: new Date(2003, 1, 1), y: 6},
     {x: new Date(2004, 1, 1), y: 5},
     {x: new Date(2005, 1, 1), y: 7},
     {x: new Date(2006, 1, 1), y: 8},
     {x: new Date(2007, 1, 1), y: 9},
     {x: new Date(2008, 1, 1), y: -8.5},
     {x: new Date(2009, 1, 1), y: -9},
     {x: new Date(2010, 1, 1), y: 5},
     {x: new Date(2013, 1, 1), y: 1},
     {x: new Date(2014, 1, 1), y: 2},
     {x: new Date(2015, 1, 1), y: -5}
   ];
 }

 getDataSetTwo() {
   return [
     {x: new Date(2000, 1, 1), y: 5},
     {x: new Date(2003, 1, 1), y: 6},
     {x: new Date(2004, 1, 1), y: 4},
     {x: new Date(2005, 1, 1), y: 10},
     {x: new Date(2006, 1, 1), y: 12},
     {x: new Date(2007, 2, 1), y: 48},
     {x: new Date(2008, 1, 1), y: 19},
     {x: new Date(2009, 1, 1), y: 31},
     {x: new Date(2011, 1, 1), y: 49},
     {x: new Date(2014, 1, 1), y: 40},
     {x: new Date(2015, 1, 1), y: 21}
   ];
 }

 getTickValues() {
   return [
     new Date(1999, 1, 1),
     new Date(2000, 1, 1),
     new Date(2001, 1, 1),
     new Date(2002, 1, 1),
     new Date(2003, 1, 1),
     new Date(2004, 1, 1),
     new Date(2005, 1, 1),
     new Date(2006, 1, 1),
     new Date(2007, 1, 1),
     new Date(2008, 1, 1),
     new Date(2009, 1, 1),
     new Date(2010, 1, 1),
     new Date(2011, 1, 1),
     new Date(2012, 1, 1),
     new Date(2013, 1, 1),
     new Date(2014, 1, 1),
     new Date(2015, 1, 1),
     new Date(2016, 1, 1)
   ];
 }

 getStyles() {
   const BLUE_COLOR = "#00a3de";
   const RED_COLOR = "#7c270b";

   return {
     parent: {
       background: "#ccdee8",
       boxSizing: "border-box",
       display: "inline",
       padding: 0,
       margin: 20,
       fontFamily: "'Fira Sans', sans-serif",
       width: "100%",
       height: "auto"
     },
     title: {
       textAnchor: "start",
       verticalAnchor: "end",
       fill: "#000000",
       fontFamily: "inherit",
       fontSize: "18px",
       fontWeight: "bold"
     },
     labelNumber: {
       textAnchor: "middle",
       fill: "#ffffff",
       fontFamily: "inherit",
       fontSize: "14px"
     },

     // INDEPENDENT AXIS
     axisYears: {
       axis: { stroke: "black", strokeWidth: 1},
       ticks: {
         size: (tick) => {
           const tickSize =
             tick.getFullYear() % 5 === 0 ? 10 : 5;
           return tickSize;
         },
         stroke: "black",
         strokeWidth: 1
       },
       tickLabels: {
         fill: "black",
         fontFamily: "inherit",
         fontSize: 16
       }
     },

     // DATA SET ONE
     axisOne: {
       grid: {
         stroke: (tick) =>
           tick === -10 ? "transparent" : "#ffffff",
         strokeWidth: 2
       },
       axis: { stroke: BLUE_COLOR, strokeWidth: 0 },
       ticks: { strokeWidth: 0 },
       tickLabels: {
         fill: BLUE_COLOR,
         fontFamily: "inherit",
         fontSize: 16
       }
     },
     labelOne: {
       fill: BLUE_COLOR,
       fontFamily: "inherit",
       fontSize: 12,
       fontStyle: "italic"
     },
     lineOne: {
       data: { stroke: BLUE_COLOR, strokeWidth: 4.5 }
     },
     axisOneCustomLabel: {
       fill: BLUE_COLOR,
       fontFamily: "inherit",
       fontWeight: 300,
       fontSize: 21
     },

     // DATA SET TWO
     axisTwo: {
       axis: { stroke: RED_COLOR, strokeWidth: 0 },
       tickLabels: {
         fill: RED_COLOR,
         fontFamily: "inherit",
         fontSize: 16
       }
     },
     labelTwo: {
       textAnchor: "end",
       fill: RED_COLOR,
       fontFamily: "inherit",
       fontSize: 12,
       fontStyle: "italic"
     },
     lineTwo: {
       data: { stroke: RED_COLOR, strokeWidth: 4.5 }
     },

     // HORIZONTAL LINE
     lineThree: {
       data: { stroke: "#e95f46", strokeWidth: 2 }
     }
   };
 }
}
export default LineChart;
