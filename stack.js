import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Page1 from "./home";
import Page2 from "./home copy";
import Page3 from "./home copy 3";

const MyStack = createNativeStackNavigator();

const HomeStack = () => {

    return (
        <MyStack.Navigator op >
            <MyStack.Screen options={{
                // headerShown: false,  
            title:"My Page 1"
            }} name="page1" component={Page1} />

            <MyStack.Screen name="page2" component={Page2} />
            <MyStack.Screen name="page3" component={Page3} />
        </MyStack.Navigator>
    )
}

export default HomeStack;