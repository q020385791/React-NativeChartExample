/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{Component}from 'react';

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


// react-native-chart-kit
import EXPieChart from'./EXPieChart'
import EXLineChart from'./EXLineChart'
import EXProgressRing from './EXProgressRing'
import EXBarChart from './EXBarChart'
import EXStackBarChart from './EXStackBarChart'
import EXContributiongraph from './EXContributiongraph'
// react-native-chart-kit

const App = () => {
      return (
      <View style={{flex: 1}}>
        <ScrollView>
          {/* react-native-chart-kit */}

           <EXPieChart/>
          <EXLineChart/>
          <EXProgressRing/>
          <EXBarChart/>
          <EXStackBarChart/>
          <EXContributiongraph/> 

           {/* react-native-chart-kit */}

   


        </ScrollView>
      </View>
      )   
    
};

export default App;