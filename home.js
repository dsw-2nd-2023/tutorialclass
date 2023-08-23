import { View, Text } from "react-native-web"
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

import { MyContext } from "./App";
import { useContext } from "react";

const Page1 = () => {
    const my_nav_obj = useNavigation();
    const {value, setValue} = useContext(MyContext);

    return (
        <View >
            <Text >
                PAGE 1
            </Text>

            <Button 
            onPress={() => my_nav_obj.navigate("page2")  } 
            title="GO TO PAGE 2" />

            <Button 
            title="increase context value" 
            onPress={() => setValue(value+1) } />

            {/* <Button 
            onPress={() => my_nav_obj.navigate("page4")  } 
            title="GO TO PAGE 4" /> */}
        </View>
    )
}

export default Page1;