import { useRef, useState } from 'react';
import classes from './Regfrom.module.css'
import Card from '../ui/Card';
import Modals from './Modals';
import Backdrop from './Backdrop';
function RegForm(){
    const [modalopen,setmodalopen]=useState(false);
      const [password,setpassword]=useState("");
      const [messege,setmessge]=useState("");
        const repasswordref=useRef();
        const nameref=useRef();
        const Emailref=useRef();
        const handleonchange=(e)=>{
            setpassword(e.target.value);
        };
        
           const CheckVal=(e)=>{
            e.preventDefault();

            const Enteredrepassword=repasswordref.current.value;
            const EnteredName=nameref.current.value;
            const EnteredEmail=Emailref.current.value;
            const regEx= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
            if(EnteredName===""  ){
                setmessge("Enter Your Name");
            }
            else if( EnteredEmail===""){
                setmessge("Enter Your Email");
            }
            else if(regEx.test(password) && password===Enteredrepassword){
                setmessge("Registration Done successfully");
            }else if(regEx.test(password) && password!==Enteredrepassword){
                setmessge("Password Does't Match");
            }else if(!regEx.test(password) && password!==""){
                setmessge("Password is not vaild Password should be at least 7 characters with 1 capital letter, one number, and one special character");
            }else{
                setmessge("please enter a password");
            }
            setmodalopen(true);
           }
           function closeHandler(){
            setmodalopen(false);
        }

          
       
return(
    <Card>
    <form className={classes.form}>
    <div className={classes.control}>
        <label htmlFor='name'>Full Name</label>
        <input type="text" required id='name'ref={nameref} />
    </div>
    <div className={classes.control}>
        <label htmlFor='Email'>Email</label>
        <input type="Email" required id='Email' ref={Emailref} />
    </div>
    <div className={classes.control}>
        <label htmlFor='Password'>Password</label>
        <input type="text" required id='Password' value={password} onChange={handleonchange}/>
       
    </div>
    <div className={classes.control}>
        <label htmlFor='rePassword'>re-Password</label>
        <input type="text" required id='rePassword' ref={repasswordref}/>
    </div>
   
    <div className={classes.actions}>
       <button onClick={CheckVal}>Regist</button>
    </div>
</form>
{modalopen && <Modals m={messege} onCancel={closeHandler} onConfirm={closeHandler}/>}
{modalopen && <Backdrop onCancel={closeHandler}/>}

</Card>

);
}
export default RegForm