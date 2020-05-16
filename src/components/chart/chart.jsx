import React, { useState, useEffect } from 'react';
import {fetchDailydata} from '../../Api/index'
import {Line, Bar} from 'react-chartjs-2'
import styles from './chart.module.css'

const Chart = ({data:{confirmed,recovered,deaths},country}) => {

    const [dailydata,setDailydata] = useState([]);

useEffect(()=>{
    const fetchapi= async()=>{
        setDailydata(await fetchDailydata())
    }

    fetchapi();
    
},[])

const linechar=(
<Line

data={{
    labels:dailydata.map(({date})=> date),
    datasets:[{
   data:dailydata.map(({confirmed})=> confirmed),
   label:'Infected',
   borderColor:'#3333ff',
   fill:true
    },{
     data:dailydata.map(({deaths})=> deaths),
     label:'Deaths',
     borderColor:'red',
     backgroundColor:'rgba(255,0,0,0.5)',
     fill:true
    }]
}}
/> 

)

const barchar = (
  confirmed ?(
    <Bar
    data={{
        labels:['Infected','Recovered','Deaths'],
        datasets:[{
            label:'People',
            backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
            data:[confirmed.value,recovered.value,deaths.value]
        }]
    }}

    options={{
        legend:{display:false},
        title:{display:true, text:`Current state in ${country}`}
    }}
    /> ):null
)



    return (

        <div className={styles.container}>
      {country  ? barchar:linechar}
</div>
    )
}

export default Chart