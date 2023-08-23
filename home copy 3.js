import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { View, Text } from "react-native-web"

const Page3 = () => {
    const navigation = useNavigation();
    return (
        <View >
            <Text >
                PAGE 3
            </Text>


            <Button title="go to page 2" onPress={()=> navigation.navigate("page2") } />
            <Button title="go to page 1" onPress={()=> navigation.navigate("page1") } />
        </View>
    )
}


export default Page3;