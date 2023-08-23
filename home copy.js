import { View, Text, TouchableOpacity } from "react-native-web"
import { useNavigation } from "@react-navigation/native";
import { MyContext } from "./App";
import { useContext } from "react";

const Page2 = () => {
    const navigation = useNavigation();
    const { value }= useContext(MyContext);
    return (
        <View >
            <Text >
                PAGE 2
            </Text>

            <View >
                <Text style={{fontSize: 30}} >
                    Value: { value }
                </Text>
            </View>

            <View >
                <TouchableOpacity onPress={() => navigation.navigate("page1") } >
                    <Text >
                        GO TO PAGE 1
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("page3")} >
                    <Text >
                        GO TO PAGE 3
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Page2;