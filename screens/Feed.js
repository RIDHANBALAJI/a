import React from 'react';
import { Text,StyleSheet,View,TextInput,TouchableOpacity,SafeAreaView,Platform,StatusBar,ImageBackground,KeyboardAvoidingView} from 'react-native';
 import TimePicker from 'react-time-picker'; 



export default class Feed extends React.Component{
  state = {     time: '10:00',   }  
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      items: [],
      time:null

    }
  }
  onChange = time => this.setState({ time })



  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }
  updateTime(event) {
    this.setState({
      time: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
      message: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }
  
  handleItemChanged1(i, event) {
    var time = this.state.time;
  time  = event.target.value;

    this.setState({
     time:time
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged1.bind(context, i)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

    render(){
  return (
    <KeyboardAvoidingView behavior="padding"style={styles.container}>
       <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Tabets Form</Text>
       </View>
       <div>
        <table className="">
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
        <input
          type="text"
          value={this.state.time}
          onChange={this.updateMessage.bind(this)}
        />
           <div>     
                <TimePicker   
                   onChange={this.onChange}        
                      value={this.state.time}         />     
                        </div>     

        <button
          onClick={this.handleClick.bind(this)}
        >
          Add Item 
        </button>
      </div>

      <View>
      <TouchableOpacity
              style={styles.button}
              onPress={() =>this.props.navigation.navigate('Dashboard')}>
              <Text style={{ fontSize:35, color:"brown"}}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  headerContainer:{

    backgroundColor:"orange",
    
    alignItems:"center",
    marginTop:20
  },
  titleText:{
    fontSize:20,
    fontWeight:"bold"
  }

});
