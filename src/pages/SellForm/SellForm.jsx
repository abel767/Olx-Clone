import './SellForm.css';
import NavForSell from '../../Components/NavForSell/NavForSell';
import Footer from '../../Components/Footer/Footer';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import axios from 'axios';
import { db } from '../../firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../../firebase'; 


function SellForm() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted"); // Add this log to check if the function is being triggered
    if (image) {
      try {
        const uploadToastId = toast.loading('uploading the post...')
        // Upload image to Cloudinary
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "sell_form_upload");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dxdsvdd7l/image/upload", 
          formData
        );

        const imageUrl = response.data.secure_url;
        console.log('Image URL:', imageUrl); // Check the image URL
         
        const userId = auth.currentUser ? auth.currentUser.uid : null;
        // Upload product data to Firestore
        await addDoc(collection(db, 'product'), {
          userId,
          category,
          title,
          description,
          price,
          imageUrl
        });

        toast.update(uploadToastId, {
          render: 'Posted Successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 3000
        });     
       } catch (error) {
        console.error("Error posting product:", error);
        alert(error.message);
      }
    }
};


  return (
    <>
      <NavForSell />
      <ToastContainer/>
      <div className="sellForm">
        <h2>POST YOUR AD</h2>
      </div>
      <div className="formWrapper">
        <form onSubmit={handleFormSubmit}>
          {/* category */}
          <label htmlFor="category">Category</label>
          <input type="text" id="category" placeholder="Mention the type" onChange={(e) => { setCategory(e.target.value) }} />

          {/* Title */}
          <label htmlFor="title">Ad Title</label>
          <input type="text" placeholder="Product Name" id="title" onChange={(e) => { setTitle(e.target.value) }} />

          {/* description */}
          <label htmlFor="description">Description</label>
          <textarea id="description" placeholder="Include Condition, features and reason for selling" onChange={(e) => { setDescription(e.target.value) }} />

          {/* price */}
          <label htmlFor="price">Set A Price</label>
          <input id="price" type="number" placeholder="₹" onChange={(e) => { setPrice(e.target.value) }} />

          {/* image */}
          <input type="file" accept="image/*" onChange={(e) => { setImage(e.target.files[0]) }} />
          <button type="submit">Post Now</button>
        </form>
      </div>
     
      <Footer />
    </>
  );
}

export default SellForm;
