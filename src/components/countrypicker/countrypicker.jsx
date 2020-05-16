import React, { useState,useEffect } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './countrypicker.module.css'
import {countries} from '../../Api/index'


const Countrypicker = (props) => {

    const [countrie, setcountries] = useState([])

    useEffect(()=>{
        const fetchcountries= async()=>{
            setcountries(await countries())
        }
    
        fetchcountries();
        
    },[setcountries])

   


    return (
       <FormControl className={styles.formcontainer}>
           <NativeSelect defaultValue="" onChange={(e)=>props.handlecountrychange(e.target.value)}>
              <option value="">Global</option>
               {countrie.map((country,i)=><option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}

export default Countrypicker