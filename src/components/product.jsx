import {React,useEffect,useState} from  "react"


const Productcards=({img,name})=>{
    return(
        <div className="product-card">
            <img src={img} alt="product" />
            <h4>
                {name}
            </h4>
        </div>
    );
}







export  default function Product(){
    
    const [products,setProducts]=useState();

    // const fetchData=async()=>{
    // const res= await fetch("https://dummyjson.com/products?limit=100")
    //     const data= await res.json()
    //     setProducts(data.products)    
// }
    useEffect(()=>{
                    
    },[])


        console.log(products)
    return(<div className="product-container">
        {products}
        
        </div>
    );
}