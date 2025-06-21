import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { products } from "../App"

import './Article.css'

export default function Article({products}) {
  const { urlId } = useParams()
  //const history = useHistory()

  const navigate = useNavigate()

  const article = products.find( ({ id }) => id === urlId);

  console.log("id: " + urlId)
  console.log(products)

  if (!article) {
    setTimeout(() => {
      // history.goBack()
      //history.push('/')
      navigate('/');
    }, 2000)
  }

  return (
    <div className="box">
      {!article && <p>No records found!</p>}
      {article && (
        <div key={article.id}>
          <img src={article.imageUrl} alt="Logo" />
          <h2>{article.title}</h2>
          <p>Price: {article.price}</p>
          <p className="border">{article.description}</p>
        </div>
      )}
    </div>
  )
}
