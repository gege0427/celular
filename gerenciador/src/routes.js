import { createStackNavigator } from "react-navigation";

import Home from "./pages/home";
import Cadastro from "./pages/cadastro";

export default createStackNavigator({
  Home,
  Cadastro,
}, {
  navigationOptions: {
      headerStyle:{
          backgroundColor: "#008B8B",
      },
      headerTintColor: "#000"
  }
});