import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

export default function App() {
  const [pageName, setPageName] = useState("page1");

  const pages = {
    page1: ({ navigation }) => (
      <View>
        <Text>page1</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("page2");
          }}
        >
          <View>
            <Text>Chuyển tới trang 2</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
    page2: ({ navigation }) => (
      <View>
        <Text>page2</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("page1");
          }}
        >
          <View>
            <Text>Chuyển tới trang 1</Text>
          </View>
        </TouchableOpacity>
      </View>
    ),
  };
  const navigation = {
    navigate: (name) => {
      setPageName(name);
    },
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    // <View style={{ marginTop: 100 }}>{pages[pageName]({ navigation })}</View>
  );
}

const Input = ({ initValue, label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput value={initValue} style={{ borderWidth: 1 }} />
    </View>
  );
};

const calulate = (a, b) => {
  return a + b;
};

const HomeScreen = ({ navigation }) => {
  // const Input2 = (
  //   <View>
  //     <TextInput value="2" style={{ borderWidth: 1 }} />
  //   </View>
  // );

  // const Input3 = () => (
  //   <View>
  //     <TextInput value="3" style={{ borderWidth: 1 }} />
  //   </View>
  // );

  const onChange = (value) => {
    console.log(value);
  };

  const submition = {
    onsubmit: () => {
      console.log("Submit thành công");
    },
  };

  const calulateAndRender = (a, b, c) => {
    const { phepTinh } = a;
    return c;
  };

  return (
    <View>
      <Text>{calulate(10, 1)}</Text>
      <View>
        {Input({ initValue: "hello", label: "123", onChange, submition })}
      </View>
      <Input initValue={"hello2"} />
      <Text>{calulateAndRender({ phepTinh: "+" }, 10, 5)}</Text>
      {/* {Input2}
      <Input3 /> */}
    </View>
  );
};
