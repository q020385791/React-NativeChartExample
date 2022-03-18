import React from 'react'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Dimensions
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const EXContributiongraph=(props)=>{
return (
<View>
<Text></Text>
<ContributionGraph
  values={commitsData}
  endDate={new Date("2017-04-01")}
  numDays={105}
  width={Dimensions.get("window").width}
  height={300}
  chartConfig={chartConfig}
/>


</View>

)

}
const commitsData = [
    { date: "2017-01-01", count: 100 },
    { date: "2017-01-03", count:  2},
    { date: "2017-01-04", count: 3 },
    { date: "2017-01-05", count: 4 },
    { date: "2017-01-06", count: 5 },
    { date: "2017-01-30", count: 50 },
    { date: "2017-01-31", count: 3 },
    { date: "2017-03-01", count: 1 },
    { date: "2017-04-02", count: 4 },
    { date: "2017-03-05", count: 2 },
    { date: "2017-05-30", count: 1 }
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 50, ${opacity})`, //圖表主要顏色
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false, // optional
    paddingTop:50
  };
export default EXContributiongraph;