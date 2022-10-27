import classes from './MB.module.css'
function Modals(props){
    function cancelHandler(){
        props.onCancel();
    }

    return (
        <div className={classes.modal}>
          <p>{props.m}</p>
          <button className={classes.btn} onClick={cancelHandler}>
            OK
          </button>
        </div>
      );
}

export default Modals