import classes from './Dashstyle.module.css';
import Dashitem from './Dashitem';
function Dashlist(props){
    return( <ul className={classes.list}>
            {props.products.map((fdata)=>(
            <Dashitem
            Key={fdata.id}
            id={fdata.id}
            title={fdata.title}
            image={fdata.image}
            price={fdata.price}
            discription={fdata.discription}
            category={fdata.category}
            />
            ))}
        </ul>
    );
    }
    export default Dashlist;