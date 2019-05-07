importar  Reagir  de  " reagir " ;
import { WebView } de  " react-native " ;

 hyperlink  const = ({navigation}) => {
  return  < fonte WebView = {{uri :  navegação . estado . params . hiperlink . url }} / > ;
};

Hyperlink . navigationOptions  = ({navigation}) => ({
  título :  navegação . estado . params . hiperlink . título
});

 Hiperlink padrão de  exportação ;