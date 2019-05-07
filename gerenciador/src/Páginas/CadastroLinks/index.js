import  React , { Component } from  " react " ;
import { Text , View , TouchableOpacity , TextInput } de  " react-native " ;

import  api  de  " ../../services/api " ;
 estilos de  importação de  " ./styles " ;

 classe padrão de  exportação CadastroLinks estende o componente {   
  state = {
    título :  " " ,
    descrição :  " " ,
    URL :  " http: // "
  };

  handleSubmit =  async () => {
     resposta  const =  aguarda  api . post ( " produtos " , {
      título :  isto . estado . título ,
      descrição :  isto . estado . descrição ,
      url :  isso . estado . url
    });

    isso . adereços . navegação . navegar ( " Home " );
  };

  render ( props ) {
    console . log ( isto . adereços );

    retorno (
      < Ver estilo = { estilos . forma } >
        < TextInput
          style = { styles . inputText }
          placeholder = " Título "
          placeholderTextColor = " # 999 "
          autoCapitalize = " none "
          autoCorrect = { false }
          underlineColorAndroid = " transparente "
          value = { this . estado . título }
          onChangeText = { text  =>  isto . setState ({title : text})}
        / >

        < TextInput
          style = { styles . inputText }
          placeholder = " Descrição "
          placeholderTextColor = " # 999 "
          autoCapitalize = " none "
          autoCorrect = { false }
          underlineColorAndroid = " transparente "
          value = { this . estado . descrição }
          onChangeText = { text  =>  isto . setState ({descrição : texto})}
        / >

        < TextInput
          style = { styles . inputText }
          placeholder = " URL "
          placeholderTextColor = " # 999 "
          autoCapitalize = " none "
          autoCorrect = { false }
          value = { this . estado . url }
          onChangeText = { text  =>  isto . setState ({url : text})}
        / >

        < TouchableOpacity
          style = { styles . productButton }
          onPress = { isso . handleSubmit }
        >
          < Estilo de texto = { estilos . productButtonText } > Salvar < / Text >
        < / TouchableOpacity >
      < / View >
    );
  }
}