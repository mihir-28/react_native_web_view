import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';


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
       
      />
      </View>
    )
  }
}