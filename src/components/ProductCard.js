import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { updateProduto, deleteProduto } from '../database';
import Feather from 'react-native-vector-icons/Feather';

const ProductCard = ({id, nome, categoria, quantidade, imagem, onDelete }) => {
  const [qtd, setQuantidade] = useState(() => quantidade);

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => {Alert.alert(
            'Excluir Produto',
            `Tem certeza que deseja excluir "${nome}"?`,
            [
              { text: 'Cancelar', style: 'cancel' },
              {
                text: 'Excluir',
                onPress: async () => {
                  const sucesso = await deleteProduto(id);
                  if (sucesso) {
                    console.log('Produto excluído com sucesso');
                    onDelete?.(); // chama a função passada pela Home
                  } else {
                    console.log('Erro ao excluir produto');
                  }
                },
                style: 'destructive',
              },
            ]
          );
        }}
      >
        <Feather name="trash" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.imagemView}>
        <Image 
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAAnwe0aHOuifwhWGL66L-anpHl8390C4zA&s" }} 
          style={styles.imagem} 
          resizeMode="cover"
        />
      </View>
      <View style={styles.prod}>
        <Text style={styles.texto}>{nome}</Text>
        <Text style={styles.texto}>{categoria}</Text>
        <View style={styles.BtnView}>
          <Botao
            text="-"
            funcao={async () => {
              setQuantidade(prev => {
              const novaQtd = Math.max(prev - 1, 0);
              updateProduto(novaQtd, id).then(sucesso => {
                if (sucesso) {
                  console.log('Quantidade atualizada com sucesso');
                }
              });
              return novaQtd;
            });
            }}
          />
          <Text style={styles.texto}>{qtd}</Text>
          <Botao
            text="+"
            funcao={async () => {
              const novaQtd = qtd + 1;
              const sucesso = await updateProduto(novaQtd, id);
              if (sucesso) {
                setQuantidade(novaQtd);
                console.log('Quantidade atualizada com sucesso');
              }
            }}
          />
        </View>
      </View>
    </View>
  );
};

function Botao({ text, funcao }) {
  return (
    <TouchableOpacity
      onPress={funcao}
      style={{
        backgroundColor: '#D8A13B',
        height: 40,
        width: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ color: '#1C1C1C', fontSize:20 }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: '100%',
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#C8C2BC',
  },
  imagemView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prod: {
    flex: 0.5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  BtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
  },
  texto: {
    fontSize: 20
  },
  imagem: {
    flex: 0.8,
    width: 140,
    borderRadius: 10, // opcional
  },
  deleteButton: {
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#D32F2F',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    zIndex: 1,
  },
});

export default ProductCard;
