import classes from './Dashstyle.module.css';
import Card from '../ui/Card';
function Dashitem(props){
    return(
    <Card>
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.price}</address>
            <h3>{props.category}</h3>
            <p>{props.discription}</p>
            
        </div>
        
    </li>
    </Card>
    );
}
export default Dashitem;