import React from 'react';
import classes from './form.module.css'

const FormOrder = () => {
    return (
        <div>
             <div className={classes.card}>
        <div>
          <h2 className={classes.h2}>Заполните форму</h2>
         
          <form >
            <div className={classes.first}>

              <input className={classes.inp} type="text" placeholder='Введите имя'  required />
              <input className={classes.inp} type="text" placeholder=''  required />
              <input className={classes.inp} type="text" placeholder='Введите имя'  required />
            </div>
            <div id="password">
              <p className={classes.p} >Password</p>
              <input className={classes.inp} type="text" required />
            </div>
            <div id="password-confirm">
              <p className={classes.p} >Password Confirmation</p>
              <input className={classes.inp} type="text" required />
            </div>
            <button  className={classes.btn} type="submit">
              Sign Up
            </button>
          </form>
        </div>
      <div className="w-100 text-center mt-2">
        <span style={{color: 'white'}}> Already have an account? </span>
      </div>
      </div>
            
        </div>
    );
};

export default FormOrder;