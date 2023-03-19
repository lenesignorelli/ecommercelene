import './styles.css'

export default function Header({usuario}) {
  return (
    <header>
        <div className='titulo'>
            FutureCommerce
        </div>
        <div className='nome-usuario'>
            Bem Vindo, {usuario}
        </div>
    </header>
  )
}
