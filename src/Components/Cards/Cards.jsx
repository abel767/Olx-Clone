import './cards.css'
import { db } from '../../firebase'
import { collection,getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cards() {

  const navigate = useNavigate()

  const [products,setProducts] = useState([])

  const handleNavigate = (id)=>{
    navigate(`/productdetail/${id}`)
  }

  useEffect(()=>{
    const fetchProducts = async()=>{
      try{
          const querySnapShot = await getDocs(collection(db,'product'))
          const productList = querySnapShot.docs.map(doc => ({
            id: doc.id,  // Include the document ID in the product data
            ...doc.data(),
          }));
          setProducts(productList);       
      }
      catch(error){
        console.log(error)
      }
    }
    fetchProducts()
  },[])
  

  return (
    <>
     <h1>Fresh recommendations
     </h1>
    <div className="cards-container">
      {/* Mapping through products array and creating a card for each product */}
      {products.map((product, index) => (
        <div className="card" key={index} onClick={()=>handleNavigate(product.id)}>
          <img src={product.imageUrl} alt={product.title} className="card-image" />
          <div className="card-content">
          <p><strong>₹ {product.price}</strong></p>
          <p className='lightP'>{product.title}</p>
          <p className='lightP'> {product.description}</p>
            {/* <p>{product.category}</p> */}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Cards