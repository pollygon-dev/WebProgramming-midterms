import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// styles
import './Home.css'
import products from './Article'

export default function Home({products}) {

  return (
    <div className="home">
      <h2>Welcome!</h2>      
      {
        <div>
          <p>Feel free to navigate our catalog and find the perfect clothes for you!</p>
           {products && products.map(article => (
        <div key={article.id} className="card">
          <img src={article.imageUrl} alt="Logo" />
          <h3>{article.title}</h3>
          <p>Price: {article.price}</p>
          <Link to={`/products/${article.id}`}>Read More...</Link>
        </div>
      ))}

        </div>}
    </div>
  )
}
