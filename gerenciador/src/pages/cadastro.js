import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";

import api from "../services/api";

export default class CadastroLinks extends Component {
  state = {
    nameUser: "",
    modelo: "",
    IMEI: "",
    description: "",
    date: "",
  };

  handleSubmit = async () => {
    const response = await api.post("cellPhones", {
      nameUser: this.state.nameUser,
      IMEI: this.state.IMEI,
      description: this.state.description,
      date: this.state.date,
      modelo: this.state.modelo,
    });

    this.props.navigation.navigate("Home");
  };

  render(props) {
    console.log(this.props);

    return (
      <View style={styles.form}>
        <TextInput
          style={styles.inputText}
          placeholder="Nome do Cliente"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.nameUser}
          onChangeText={text => this.setState({ nameUser: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Modelo do Aparelho"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.modelo}
          onChangeText={text => this.setState({ modelo: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Qual o problema do aparelho"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.description}
          onChangeText={text => this.setState({ description: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="IMEI do Aparelho"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.IMEI}
          onChangeText={text => this.setState({ IMEI: text })}
        />

        <TextInput
          style={styles.inputText}
          placeholder="Data de Entrega"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.date}
          onChangeText={text => this.setState({ date: text })}
        />
        <TouchableOpacity
          style={styles.productButton}
          onPress={this.handleSubmit}
        >
          <Text style={styles.productButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    form: {
      flex: 1,
      padding: 20,
      paddingTop: 70
    },
    inputText: {
      height: 42,
      backgroundColor: "#fff",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#999",
      marginBottom: 30,
      paddingLeft: 15
    },
    productButton: {
      height: 42,
      borderRadius: 5,
      backgroundColor: "#5C87A7",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 1
    },
    productButtonText: {
      fontSize: 16,
      color: "#333",
      fontWeight: "bold",
      color: "#f1f1f1"
    }
  });
