import React from 'react';
import {VictoryLine, VictoryAxis, VictoryLabel, VictoryBar, VictoryPie} from 'victory';

class Example2 extends React.Component {
  render() {
    //these are defined below the return statement
    const styles = this.getStyles();
    const dataSet1 = this.getDataSet1();
    const dataSet2 = this.getDataSet2();
    const dataSetPIE = this.getDataSetPIE();
    const tickValues = this.getTickValues();


    return (

      // a lot of magic numbers here- just trying to get stuff to fit with svg- might have to change it all for responsive views

      //i ended up deleting viewBox- I'm not 100% sure what it does. But it did mean I had to mess with the translate on the g element...

      //update- now im going to start messing with viewBox again- I current have committed a working version with data.

      //viewBox is an svg thing- how to stretch out graphics to fit parent container minx miny width height
      <div>
        <svg
          width={400} height={300}
          style={styles.parent}
          viewBox="0 0 400 325">

          <VictoryLabel x={175} y={25}        style={styles.title}
          text="CPU" />

          <VictoryLabel x={150} y={317}        style={styles.title}
          text="Time in Seconds" />

          <VictoryLabel x={25} y={45}        style={styles.title}
          text={"% of \n CPU"} />

          <g transform={"translate(-10,30)"}>
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

        <svg
          width={400} height={300}
          style={styles.parent}
          viewBox="0 0 400 325">
          <g transform={"translate(-10,30)"}>
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
              interpolation="bundle"
              style={styles.lineOne}
            />

            <VictoryAxis dependentAxis
              domain={[0,200]}
              orientation="right"
              standalone={false}
              style={styles.rightAxis}
              offsetX={70}

            />

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


        <svg
          width={400} height={300}
          style={styles.parent}
          viewBox="0 0 400 325">
          <g transform={"translate(-10,30)"}>
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
              interpolation="cardinal"
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

        <svg
          width={400} height={300}
          style={styles.parent}
          viewBox="-40 0 400 400">
          <g transform={"translate(-10,-10)"}>

            <VictoryPie
              innerRadius={100}
              data={dataSetPIE}
                  x="state"
                  y="bytes"

              colorScale={"cool"}
              stlye={styles.pie}

            />

          </g>
        </svg>


        <svg
          width={400} height={300}
          style={styles.parent}
          viewBox="0 0 400 325">
          <g transform={"translate(-10,30)"}>
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
            <VictoryBar
              data={dataSet1}
              domain={{
                x:[0,5],
                y:[0,4]
              }}
              // this interpolation changes the style of the line
              interpolation="natural"
              style={styles.lineOne}
            />

            {/* //this will just be a second line plotted against same axis, but if I wanted to put a different line with different y values that can be done as well */}
            <VictoryBar
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


      </div>
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

  getDataSetPIE() {
    return [
      {state: "Free", bytes: 20000000000},
      {state: "Used", bytes: 12000000000},
      {state: "Corrupted", bytes: 5000000000},
      {state: "test", bytes: 8000000000},

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

      //label styles
      title: {
        fontFamily: "inherit",
        fontSize: "16px",
        fontWeight: "bold"
      },

      pie: {
        labels: {stroke: PURPLE_LINE, strokeWidth:3},
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

      rightAxis: {
        axis: {stroke: PURPLE_LINE, strokeWidth:3},
        ticks: {stroke: PURPLE_LINE, strokeWidth:3},
        tickLabels: {
          fill: PURPLE_LINE,
          fontFamily: "inherit",
          fontSize:15
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
