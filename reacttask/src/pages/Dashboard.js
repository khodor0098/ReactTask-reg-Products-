import Dashlist from "../component/Dashboard/Dashlist";
import {useState,useEffect} from 'react' 
function Dashboard(){
    const[isloading,setisloading]=useState(true);
    const [loadproducts,setloadproducts]=useState([]);
    useEffect(()=>{
        setisloading(true)
        fetch('https://fakestoreapi.com/products').then(response=>{
        return response.json();
    }).then(data=>{
        const products=[];
        for(const key in data){
           const product={
            id:key,
            ...data[key]
           };
           products.push(product);
        };
        setisloading(false);
        setloadproducts(products);
        console.log(products);
    });
   

    },[]);
    if(isloading){
        return(
            <section>
                <p>Loading....</p>
            </section>
        );
    }
    
return(
    <section>
    <h1>Products</h1>
    <ul>
        <Dashlist products={loadproducts} />
    </ul>
</section>
);
}
export default Dashboard