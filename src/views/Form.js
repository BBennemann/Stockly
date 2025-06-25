import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';
import RNPickerSelect from 'react-native-picker-select';
import { insertProduto } from '../database';

const Form = ({ voltar }) => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [quantidade, setQuantidade] = useState('');


  const salvar = async () => {
    if (!nome || !categoria || !quantidade) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    const sucesso = await insertProduto(nome, categoria, imagem, Number(quantidade));
    if (sucesso) {
      Alert.alert('Produto salvo com sucesso!');
      voltar();
    } else {
      Alert.alert('Erro ao salvar o produto.');
    }
  };

  return (
    <View style={styles.container}>
      <Header/>

      <View style={{flex: 1, paddingHorizontal: 15, justifyContent: 'center', paddingBottom: 50}}>
        <Text style={styles.title}>Criar Produto</Text>

        <TextInput
          style={styles.input}
          placeholderTextColor={'#999'}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <View style={styles.dropdownWrapper}>
          <RNPickerSelect
            onValueChange={(value) => setCategoria(value)}
            placeholder={{ label: 'Selecione uma categoria...', value: null }}
            items={[
              { label: 'Taça', value: 'Taça' },
              { label: 'Copo', value: 'Copo' },
              { label: 'Bebida', value: 'Bebida' },
              { label: 'Lata', value: 'Lata' },
              { label: 'Vestuario', value: 'Vestuario' },
              { label: 'Growler', value: 'Growler' },
            ]}
            style={{
              inputAndroid: styles.dropdownText,
              inputIOS: styles.dropdownText,
              placeholder: {
                color: '#999',
              },
            }}
            value={categoria}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholderTextColor={'#999'}
          placeholder="ImagemURL(Opcional)"
          value={imagem}
          onChangeText={setImagem}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor={'#999'}
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar Produto</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: '#AAA', marginTop: 10 }]} onPress={voltar}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  button: {
    backgroundColor: '#D8A13B',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#1C1C1C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownWrapper: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    height: 50, // mesma altura dos inputs
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
});

export default Form;
