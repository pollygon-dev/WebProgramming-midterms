import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import products_list from '../App.jsx'

import './Home.css'

export default function Contact({products}) {
  return (
    <div className="home">
       {products && products.map(article => (
        <div key={article.id} className="card">
          <img src={article.imageUrl} alt="Logo" />
          <h3>{article.title}</h3>
          <p>Price: {article.price}</p>
          <Link to={`/products/${article.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  )
}
