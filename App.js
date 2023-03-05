import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      n1: 1,
      n2: 1,
      resultado: 0
    }
    this.multiplicar = this.multiplicar.bind(this);
  }

  multiplicar(){
    this.setState({
      resultado: this.state.n1 * this.state.n2
    })
  }

  render(){
    return (
      <View style={{alignItems: 'center', marginTop: 25}}>
        <Text  style={{fontWeight: 'verdana', fontSize: 20, color: 'orange'}}>Multiplicador de Números</Text>

        <TextInput style={{marginTop: 10, width: 150, padding: 10, backgroundColor: '#FFFF00', borderRadius: 5}} placeholder="Digite o 1 número: " onChangeText={(n) => this.setState({n1: n})}></TextInput>

        <TextInput style={{margin: 10, width: 150, padding: 10, backgroundColor: '#FFFF00', borderRadius: 5}}  placeholder="Digite o 2 número: " onChangeText={(n) => this.setState({n2: n})}></TextInput>

        <Button title='Calcular' onPress={this.multiplicar}></Button>

        <Text style={{marginTop: 15, fontWeight: 'bold', fontSize: 16, color: 'green'}}>Resultado: {this.state.resultado}</Text>
      </View>
    );
  }
}