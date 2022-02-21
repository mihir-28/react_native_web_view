import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';


export default class WebViewMoviezSpace extends Component {
  constructor(props) {
    super(props);
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = ()=>{
    this.WEBVIEW_REF.current.goBack();
    return true;
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  render(){
    return (

      //npm install --save react-native-webview
      
      <View style = {{flex:1}}>
        <StatusBar
        animated={true}
        backgroundColor="#6495ED"
        barStyle={'default'}
/> 
      <WebView
        style = {{marginTop: 20}}
        originWhitelist={['*']}
        source={{ uri: "http://www.pranavtrivedi.in/" }} 
        ref={this.WEBVIEW_REF}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
      />
<Text>mihir</Text>
      </View>
    )
  }
}
