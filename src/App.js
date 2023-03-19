// import logo from './logo.svg';
import Header from './components/Header';
import Produtos from './components/Produtos';
import './App.css';

const produtos = [
  { codigo: "A305", descricao: "Aparelho Celular", marca: "Acme", preco: 1250.78, urlImagem:
  "https://static.vecteezy.com/ti/vetor-gratis/t2/351222-icone-de-de-telefone-celular-gratis-vetor.jpg"
  },
  { codigo: "A270", descricao: "Ventilador", marca: "Wayne", preco: 1250.78, urlImagem:
  "https://i.zst.com.br/thumbs/49/1d/1d/-595849818.jpg" },
  { codigo: "F087", descricao: "Armário", marca: "Panther", preco: 499.99, urlImagem:
  "https://vitrinemoveis.com.br/wp-content/uploads/2019/05/armario-baixo-300x300.png" },
  { codigo: "G010", descricao: "Machado", marca: "Viking", preco: 115.32, urlImagem:
  "https://m.media-amazon.com/images/I/41kqZ1XAPiL._AC_.jpg" },
  { codigo: "H677", descricao: "Sapato", marca: "Boots", preco: 215.49, urlImagem:
  "https://http2.mlstatic.com/D_NQ_NP_711180-MLB25950395149_092017-O.jpg" }
  ]

const nomeUsuario = "Indiana Jones";

function App() {
  return (
    <div className="App">
      
      <Header usuario={nomeUsuario}/>
      <div className='tabela-produtos'>
        {
          produtos.map(prod => <Produtos key={prod.codigo} codigo={prod.codigo} descricao={prod.descricao}
            marca={prod.marca} preco={prod.preco} imagem={prod.urlImagem}/>)
        }
      </div>
    </div>
  );
}

export default App;
