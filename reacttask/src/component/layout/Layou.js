import classes from './layout.module.css';
import {Link} from 'react-router-dom';
function Layou(){
return(
    <header className={classes.header}>
    <div className={classes.logo}>Khodor Mahdi</div>
    <nav>
    <ul>
        <li>
            <Link to='/'>Registration</Link>
        </li>
        <li>
        <Link to='/Dashboard'>Dashboard</Link>
        </li>
    </ul> 
    </nav>                    
</header>
);
}
export default Layou