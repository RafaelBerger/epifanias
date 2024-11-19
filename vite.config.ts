export default {
  server: {
    host: "0.0.0.0", // Certifique-se de que o Vite está ouvindo em todas as interfaces
    port: 5173, // ou a porta que você estiver usando
    watch: {
      usePolling: true, // Habilita o polling para detectar mudanças em arquivos
    },
  },
};
