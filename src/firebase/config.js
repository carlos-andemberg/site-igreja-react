// src/firebase/config.js

// Importa as funções que precisamos do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, deleteDoc } from "firebase/firestore"; // Adicione doc e deleteDoc
import { getStorage, ref, deleteObject } from "firebase/storage"; // Adicione ref e deleteObject
// Sua configuração do Firebase (a versão correta que você forneceu)
const firebaseConfig = {
  apiKey: "AIzaSyAkdYn7MpRiUzn4V2XrBrsObz6MvtcBwmM",
  authDomain: "site-igreja-adbras.firebaseapp.com",
  projectId: "site-igreja-adbras",
  storageBucket: "site-igreja-adbras.firebasestorage.app",
  messagingSenderId: "574095457557",
  appId: "1:574095457557:web:4c3b7e2c82928893b03d1c",
  measurementId: "G-EGKCRM8KLX"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa e exporta os serviços que vamos usar
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

/**
 * Deleta um evento do Firestore e sua imagem correspondente do Storage.
 * @param {object} eventToDelete - O objeto do evento a ser deletado. Deve conter um 'id' e opcionalmente uma 'imageUrl'.
 */
export const deleteEventAndImage = async (eventToDelete) => {
  // Verificamos se o evento a ser deletado foi fornecido e tem um ID.
  if (!eventToDelete || !eventToDelete.id) {
    console.error("Erro: Objeto de evento inválido para exclusão.");
    throw new Error("Dados do evento inválidos.");
  }

  try {
    // Passo 1: Se o evento tiver uma URL de imagem, delete a imagem primeiro.
    if (eventToDelete.imageUrl) {
      // Cria uma referência ao arquivo no Storage usando a URL completa.
      const imageRef = ref(storage, eventToDelete.imageUrl);
      
      // Deleta o arquivo.
      await deleteObject(imageRef);
      console.log("Imagem deletada com sucesso do Storage!");
    }

    // Passo 2: Delete o documento do evento do Firestore.
    // Cria uma referência ao documento na coleção 'events' usando o ID do evento.
    const docRef = doc(db, 'events', eventToDelete.id);

    // Deleta o documento.
    await deleteDoc(docRef);
    console.log("Documento do evento deletado com sucesso do Firestore!");

  } catch (error) {
    // Se algo der errado em qualquer um dos passos, capturamos o erro.
    console.error("Erro ao deletar evento e/ou imagem: ", error);
    // Lançamos um novo erro para que a interface do usuário saiba que a operação falhou.
    throw new Error("Falha ao deletar o evento. Tente novamente.");
  }
};