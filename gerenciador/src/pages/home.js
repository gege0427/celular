import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight
} from "react-native";

import api from "../services/api";

export default class Home extends Component {

  static navigationOptions = {
    title: 'Lista de Celulares para Consertar'
  }
  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadCelulares();
  }

  loadCelulares = async () => {
      const response = await api.get("/cellPhones");
      this.setState({ docs: response.data});
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{item.nameUser}</Text>
        <Text style={styles.productDescription}>{item.modelo}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productDescription}>{item.IMEI}</Text>
        <Text style={styles.productDescription}>{item.date}</Text>

        <TouchableOpacity
          style={styles.productButton}
          onPress={() => {
            api.delete('/cellPhones/${item._id}')
            this.loadCelulares()
          }}
        >
          <Text style={styles.productButtonText}>Deletar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 2
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    backgroundColor: "#ddd",
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
    fontWeight: "bold"
  }
});