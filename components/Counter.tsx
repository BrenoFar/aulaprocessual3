import React from 'react';
import {Text,TouchableOpacity, StyleSheet} from 'react-native';

export default function Counter(){
    const [count, setCount] = React.useState(0);
    return(
        <>
            <Text style={styles.title}> Você clicou {count} vezes!</Text>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                <Text style={styles.buttonText}>Clique aqui!</Text>
            </TouchableOpacity>

        </>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#AD6200',
    },
    button:{
        alignItems: 'center',
        backgroundColor: '#AD6200',
        padding: 10,
        borderRadius: 10,
    },
    buttonText:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    }
});