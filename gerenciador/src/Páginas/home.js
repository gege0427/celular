import  React , { Component } from  " react " ;
importar {
  Vista ,
  Texto ,
  FlatList ,
  TouchableOpacity ,
  StyleSheet ,
  TouchableHighlight
} de  " react-native " ;

import  api  de  " ../services/api " ;

 classe padrão de  exportação Início estende o componente {   
  state = {
    productInfo : {},
    docs : [],
    página :  1
  };

  componentDidMount () {
    isso . loadLinks ();
  }

  loadLinks =  assíncrono ( página  =  1 ) => {
    tente {
       resposta  const =  aguarda  api . get ( ` / products? page = $ { page } ` );

      const { docs , ... productInfo } =  resposta . dados ;

      isso . setState ({
        docs : [ ... isso . estado . docs , ... docs],
        informação do produto,
        página
      });
    } pegar (erro) {
      console . log (erro);
    }
  };

  loadMore  = () => {
    const { page , productInfo } =  isso . estado ;

    if (page ===  productInfo . pages ) retornar ;

    const  pageNumber  = página +  1 ;

    isso . loadLinks (pageNumber);
  };

  renderItem  = ({item}) => {
    retorno (
      < Ver estilo = { estilos . productContainer } >
        < Estilo de texto = { estilos . productTitle } > { item . título } < / Text >
        < Estilo de texto = { estilos . productDescription } > { item . descrição } < / Text >

        < TouchableOpacity
          style = { styles . productButton }
          onPress = {() => {
            isso . adereços . navegação . navigate ( " Hyperlink " , {hyperlink : item});
          }}
        >
          < Estilo de texto = { estilos . productButtonText } > Acessar < / Texto >
        < / TouchableOpacity >
      < / View >
    );
  };

  render () {
    retorno (
      < Ver estilo = { estilos . recipiente } >
        { / * <TouchableHighlight
          onPress = {() => {
            this.props.navigation.navigate ("CadastroLinks");
          }}
          underlayColor = "branco"
        >
          <Texto> Links Cadastrar </ Text>
        </ TouchableHighlight> * / }
        < FlatList
          contentContainerStyle = { estilos . lista }
          data = { this . estado . docs }
          keyExtractor = { item  =>  item . _id }
          renderItem = { this . renderItem }
          onEndReached = { this . loadMore }
          onEndReachedThreshold = { 0,1 }
        / >
      < / View >
    );
  }
}

 estilos de  const =  StyleSheet . create ({
  container : {
    flex :  1 ,
    backgroundColor :  " #fafafa "
  }
  list : {
    preenchimento :  20
  }
  productContainer : {
    backgroundColor :  " #FFF " ,
    borderRadius :  5 ,
    preenchimento :  20 ,
    marginBottom :  20 ,

    shadowColor :  " # 000 " ,
    shadowOffset : {width :  0 , height :  5 },
    shadowOpacity :  0.4 ,
    shadowRadius :  5 ,
    elevação :  2
  }
  productTitle : {
    fontSize :  18 ,
    fontWeight :  " negrito " ,
    color :  " # 333 "
  }
  productDescription : {
    fontSize :  16 ,
    color :  " # 999 " ,
    marginTop :  5 ,
    Altura da linha :  24
  }
  productButton : {
    altura :  42 ,
    borderRadius :  5 ,
    backgroundColor :  " #ddd " ,
    justifyContent :  " center " ,
    alignItems :  " center " ,
    marginTop :  15 ,
    shadowColor :  " # 000 " ,
    shadowOffset : {width :  0 , height :  5 },
    shadowOpacity :  0.4 ,
    shadowRadius :  5 ,
    elevação :  1
  }
  productButtonText : {
    fontSize :  16 ,
    cor :  " # 333 " ,
    fontWeight :  " negrito "
  }
});