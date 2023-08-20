import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// Configuração para suprimir o aviso de depreciação
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado");
  } catch (error) {
    console.error("Erro: ", error.message);
  }
};

export default {
  connect,
};
