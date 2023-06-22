import React, { useState } from 'react'

 
const Display=(props)=>{
  return(
    <div>{props.cart}</div>
  )
} 

function Button(props) {
   return (
      <button onClick={props.handleClick}>{props.text}</button>
     )
   }
   
 
    function App() {
  const [cart,setCart]=useState(0);
  const [buttonText,setButtonText]=useState('addcart')
  
  
 function handleAddClick(){
  if(cart===0){
    setCart(prevstate=> prevstate+1);
    setButtonText('remove')}
  else {
  setCart(prevstate=> prevstate-1);
setButtonText('addcart')
   
        }
      }
   
  
   
       
const [cards]=useState([
    {
      id:1,
      title:'Fancy product',
      reviews:' ',
      productprice:' ',
      productprice1:'$40-$80',
      important:false
      
  },
  {
    id:2,
    title:'Special Item',
    reviews:'*****',
    productprice:'$50',
    productprice1:'$25',
    important:true,
   Sale:'sale'
},
{
  id:3,
  title:'Sale Item',
  productprice:' ',
  productprice1:'$40-$80',
  important:true,
 Sale:'sale'
   },
{
  id:4,
  title:'Popular Item',
  reviews:'*****',
   productprice:'$50',
   productprice1:'$25',
   important:true
}
 
])
 return (
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li> class="dropdown-item" New Arrivals</li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"  >cart</i>
                             <Display cart={cart}/>
                            
                            <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
       
       
           
<div className='row2'>
        <h1>Shop in style</h1>
        <h4>With this shop hompeage template</h4>

        </div>
        
        <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
    
    
       {
      cards.map((card)=>(
              <div Card key ={card.id} card={card} >
                <div class="col  mb-5">
                        <div class="card  h-100">
                        <div class="badge bg-dark text-white position-absolute">{card.Sale}</div>
                            
                            <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div class="card-body p-4">
                                <div class="text-center">
                                    
                                    <h5 class="fw-bolder">{card.title}</h5>
                                    <p>{card.reviews}</p>
                                    <div><span class="text-muted text-decoration-line-through">{card.productprice}</span>
                                            {card.productprice1}</div>
                                     
                                </div>
                            </div>
                            
  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
  <div class="text-center">< Button class="btn btn-outline-dark mt-auto" text={buttonText} handleClick={handleAddClick}></Button></div>
                                </div>
                        </div>
                        </div>
                    </div>
                    ))
      }   
    </div>
      </div>
      
   </div>
  )
  }

export default App


 
