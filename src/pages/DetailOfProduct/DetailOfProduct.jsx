import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import UnderNav from '../../Components/UnderNav/UnderNav'
import { db } from '../../firebase'
import { doc,getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import AdBanner from '../../Components/AdBanner/AdBanner'
import './productDetail.css'
function ProductDetail() {
  const {id} = useParams()
  const [product,setProduct] = useState(null)
 
  useEffect(()=>{
      console.log('id is :', id)
      const fetchProduct = async()=>{
         try{
             const docRef = doc(db,'product', id)
             const docSnap = await getDoc(docRef)

             if(docSnap.exists()){
              setProduct(docSnap.data())
             }else{
              console.log('no such document')
             }
         }
         catch(error){
          console.log(error)
         }
      }
      fetchProduct()

  },[id])
  return (
    <>
      <Navbar />
      <UnderNav />
      <AdBanner/>
      <div className="container">
        {product ? (
          <div className="product-detail">
            <div  className='img'>
            <img src={product.imageUrl} alt={product.title}/>
            </div>
            <div className="priceAndTitle">
            <p className='priceP'>₹{product.price}</p>
            <h3>{product.title}</h3>
            <p className='categoryP'>Category: {product.category}</p>
            <h3>Description</h3>
            <p className='disP'>{product.description}</p>
            </div>
          </div>
          
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail