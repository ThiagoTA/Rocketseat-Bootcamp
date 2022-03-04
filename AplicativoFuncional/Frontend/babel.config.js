module.exports = {
  presets: [
    '@babel/preset-env', // Vai converter o código de um JS mais moderno para um mais antigo baseado no ambiente da nossa aplicação
    '@babel/preset-react' // Adicionar as funcionalidades do react para o browser possa entender
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}