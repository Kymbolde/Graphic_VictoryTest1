import React from 'react';
import {VictoryLine, VictoryAxis, VictoryLabel} from 'victory';

class Example2 extends React.Component {
  render() {
    //these are defined below the return statement
    const styles = this.getStyles();
    const dataSet1 = this.getDataSet1();
    const dataSet2 = this.getDataSet2();
    const tickValues = this.getTickValues();


    return (
      //i ended up deleting viewBox- I'm not 100% sure what it does. But it did mean I had to mess with the translate on the g element...
      <svg width={400} height={400} style={styles.parent} >
        <g transform={"translate(-20,100)"}>
          <VictoryAxis
            // scale="time" not sure how the scale value formats things, but time was not needed for ints
            //what does standalone do?
            standalone={false}
            style={styles.axisTime}
            tickValues={tickValues}
            tickFormat={(x)=>x.toPrecision(1)}
          />
          {/* this axis must be dependentAxis */}
          <VictoryAxis dependentAxis
             domain={[0,4]}
             orientation="left"
             standalone={false}
             style={styles.leftVerticalAxis}
             offsetX={50}
          />
          {/* This will be the first data line */}
          <VictoryLine
            data={dataSet1}
            domain={{
              x:[0,5],
              y:[0,4]
            }}
            // this interpolation changes the style of the line
            interpolation="monotoneX"
            style={styles.lineOne}
          />

          {/* //this will just be a second line plotted against same axis, but if I wanted to put a different line with different y values that can be done as well */}
          <VictoryLine
            data={dataSet2}
            domain={{
              x:[0,5],
              y:[0,4]
            }}
            // this interpolation changes the style of the line
            interpolation="monotoneX"
            style={styles.lineTwo}
          />
        </g>
      </svg>
    );
  }

  getDataSet1() {
    return [
      {x:0, y:0},
      {x:1, y:1},
      {x:2, y:2},
      {x:3, y:2},
      {x:4, y:3},
      {x:5, y:4},
    ]
  }

  getDataSet2() {
    return [
      {x:0, y:4},
      {x:1, y:4},
      {x:2, y:1},
      {x:3, y:0},
      {x:4, y:1},
      {x:5, y:2},
    ]
  }

  getTickValues() {
    return [0,1,2,3,4,5];
  }

  getStyles() {
    //define constants here?
    const BLUE_LINE = "rgb(30, 219, 231)";
    const PURPLE_LINE = "rgb(169, 32, 226)"
    //this will return an object, not an array
    return {
      parent: {
        background: "rgb(139, 155, 212)",
        boxSizing: "border-box",
        display: "inline",
        margin: 25,
        // width: "100%",
        // height: "auto"
      },

      //axis styles
      axisTime: {
        axis: {stroke: "black", strokeWidth:1},
        ticks: {
          stroke: "black",
          strokeWidth:1
        },
        tickLabels: {
          fill: "black",
          fontFamily: "inherit",
          fontSize: 16
        }
      },

      //line styles
      lineOne: {
        data: {stroke: BLUE_LINE, strokeWidth:3}
      },
      lineTwo: {
        data: {stroke: PURPLE_LINE, strokeWidth:3}
      }
    }
  }
}

export default Example2;
