import SQLite from 'react-native-sqlite-storage';

// Ativa o modo async/await
SQLite.enablePromise(true);

// Função para abrir o banco
const getDBConnection = async () => {
  try {
    const db = await SQLite.openDatabase({ name: 'estoque.db', location: 'default' });
    console.log('Banco de dados aberto com sucesso');
    return db;
  } catch (error) {
    console.error('Erro ao abrir o banco de dados:', error);
    throw error;
  }
};

// Cria a tabela, se não existir
export const createTable = async () => {
  try {
    const db = await getDBConnection();
    await db.executeSql(
      `CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        categoria TEXT,
        imagem TEXT,
        quantidade INTEGER
      );`
    );
    console.log('Tabela criada/verificada com sucesso');
  } catch (error) {
    console.error('Erro ao criar/verificar tabela:', error);
  }
};

// Insere um produto no banco
export const insertProduto = async (nome, categoria, imagem, quantidade) => {
  try {
    const db = await getDBConnection();
    await db.executeSql(
      'INSERT INTO produtos (nome, categoria, imagem, quantidade) VALUES (?, ?, ?, ?)',
      [nome, categoria, imagem, quantidade]
    );
    console.log('Produto inserido com sucesso');
    return true;
  } catch (error) {
    console.error('Erro ao inserir produto:', error);
    return false;
  }
};

export const updateProduto = async (quantidade, id) => {
  try {
    console.log(`Atualizando ID ${id} para quantidade ${quantidade}`);
    const db = await getDBConnection();
    await db.executeSql(
      'UPDATE produtos SET quantidade = ? WHERE id = ?',
      [quantidade, id]
    );
    console.log('Produto inserido com sucesso');
    return true;
  } catch (error) {
    console.error('Erro ao inserir produto:', error);
    return false;
  }
};

export const deleteProduto = async (id) => {
  try {
    const db = await getDBConnection();
    await db.executeSql('DELETE FROM produtos WHERE id = ?', [id]);
    console.log(`Produto com ID ${id} excluído com sucesso`);
    return true;
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    return false;
  }
};

// Retorna todos os produtos cadastrados
export const getProdutos = async () => {
  try {
    const db = await getDBConnection();
    const results = await db.executeSql('SELECT * FROM produtos');
    const produtos = [];

    results.forEach(result => {
      for (let i = 0; i < result.rows.length; i++) {
        produtos.push(result.rows.item(i));
      }
    });

    console.log('Produtos encontrados:', produtos);
    return produtos;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
};
