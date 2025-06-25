import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { getProdutos, createTable } from '../database';

const Home = ({ setTela, refresh }) => {
  const [produtos, setProdutos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [mostrarBusca, setMostrarBusca] = useState(false);

  useEffect(() => {
    const carregar = async () => {
      await createTable();
      const lista = await getProdutos();
      setProdutos(lista);
    };
    carregar();
  }, [refresh]); // ← Recarrega sempre que o valor de refresh mudar

  const carregarProdutos = async () => {
    const lista = await getProdutos();
    setProdutos(lista);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#2E2E2E' }}>

      <Header onSearchPress={() => setMostrarBusca(!mostrarBusca)}/>

      {mostrarBusca && (
        <TextInput
          style={styles.campoBusca}
          placeholder="Filtrar por categoria..."
          placeholderTextColor="#ccc"
          value={pesquisa}
          onChangeText={setPesquisa}
        />
      )}
      
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        {Array.isArray(produtos) && produtos.length === 0 ? (
          <Text style={styles.vazio}>Nenhum produto cadastrado.</Text>
        ) : (
          Array.isArray(produtos) &&
          produtos
          .filter(p => p.categoria.toLowerCase().includes(pesquisa.toLowerCase()))
          .map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              nome={produto.nome}
              categoria={produto.categoria}
              quantidade={produto.quantidade}
              imagem={produto.imagem}
              onDelete={carregarProdutos}
            />
          ))
        )}
        <View style={{height:60}}/>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={setTela}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  campoBusca: {
    backgroundColor: '#1C1C1C',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#D8A13B',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabText: {
    fontSize: 30,
    color: '#1C1C1C',
    fontWeight: 'bold',
  },
  vazio: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default Home;
