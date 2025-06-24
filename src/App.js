import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './views/Home';
import Form from './views/Form';

export default function App() {
  const [tela, setTela] = useState('home');
  const [refresh, setRefresh] = useState(false);

  const irParaForm = () => setTela('form');
  const voltarParaHome = () => {
    setTela('home');
    setRefresh(prev => !prev); // força Home a atualizar
  };

  return (
    <View style={{ flex: 1 }}>
      {tela === 'home' ? (
        <Home setTela={irParaForm} refresh={refresh} />
      ) : (
        <Form voltar={voltarParaHome} />
      )}
    </View>
  );
}
