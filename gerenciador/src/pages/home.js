import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

import api from "../services/api";

export default class Home extends Component {

  static navigationOptions = {
    title: 'Celulares para Conserto',
    headerTitleStyle: {
      textAlign: 'center', 
      color: '#fafafa',
      flex: 1
  }
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

  handleNew = () => {
    this.props.navigation.navigate("Cadastro")
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{item.nameUser}</Text>
        <Text style={styles.productDescription}>{item.modelo}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productDescription}>{item.IMEI}</Text>
        <Text style={styles.productDescription}>{item.date}</Text>

        <TouchableOpacity onPress= { () => {
                    Alert.alert(
                        'Deletar',
                        'Deseja realmente deletar?',
                        [
                            {
                                text: 'Não', onPress: () => 
                                    console.log('Cancel'),
                                    style: 'cancel'
                                    
                                },
                                {
                                    text: 'Sim', onPress: () => {
                                        api.delete(`/cellPhones/${item._id}`)
                                        .then(res => {
                                            this.loadCelulares();
                                            Alert.alert(
                                                'Pronto',
                                                'Item deletado com sucesso'
                                            )
                                        })
                                        .catch(err => {
                                            'Erro',
                                            'Não foi pssível deletar'
                                        })
                                    }
                                }
                            
                        ]
                    )
                }} style={styles.productButton}>
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
        <View>
          <TouchableOpacity style={styles.productButtonNovo} onPress={this.handleNew}>
            <Text style={styles.productButtonText}>Novo</Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00FFFF',
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
    backgroundColor: "#008B8B",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1,
    marginHorizontal: 30
  },
  productButtonNovo: {
    height: 44,
    backgroundColor: "#008B8B",
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
    color: "#fafafa",
    fontWeight: "bold"
  }
});