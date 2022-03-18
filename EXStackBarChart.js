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

const EXStackBarChart=(props)=>{
return (
<View>
<Text>StackBarChart</Text>
<StackedBarChart
  style={graphStyle}
  data={data}
  width={Dimensions.get("window").width}
  height={220}
  chartConfig={chartConfig}
  showLegend
/>


</View>

)

}
const graphStyle=StyleSheet.create({
    marginVertical:10,
    borderRadius:8
    
    });
    const propsForLabelsStyle=StyleSheet.create({
color:'red;'

    })
    const data = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
          [60, 60, 60],
          [30, 30, 60]
        ],
        barColors: ["#ff00ff", "#ced6e0", "#a4b0be"] //堆積圖表的背景顏色
      };
  const chartConfig = {
    backgroundGradientFrom: "#ff0000", //背景線性漸層變化起始(從左開始)
    backgroundGradientFromOpacity: 0.8, //背景線性漸層變化透明度
    backgroundGradientTo: "#00bfff",   //背景線性漸層變化結束(從左開始)
    backgroundGradientToOpacity: 1,
    // fillShadowGradientFrom:'#ff0000',
    // fillShadowGradientTo:'#ff0000',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, //圖表文字主要顏色
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.8,//每一個Bar佔據一區間的寬度比例
    useShadowColorFromDataset: false, // optional
    propsForBackgroundLines:"#ff0000",
    propsForLabels:{propsForLabelsStyle}
  };
export default EXStackBarChart;