import './styles.css';

export default function Produtos({codigo, descricao, marca, preco, imagem}) {
  return (
    <div className='card-produto'>
       <img src={imagem} alt='foto do produto' className='produto-imagem'/>
       <div>
            Código: {codigo}
       </div>
       <div className='produto-descricao'>
            {descricao}
       </div>
       <div>
            Marca: {marca}
       </div>
       <div>
            R$ {preco}
       </div>
       <button>Detalhar</button>
    </div>
  )
}
