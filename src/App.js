import React from 'react';
import Cards from './components/cards/cards'
import Chart from './components/chart/chart'
import Countrypicker from './components/countrypicker/countrypicker'
import styles from './App.module.css'
import {fetchdata } from './Api/index'

class App extends React.Component {

    state = {
        data:{},
        country:""
    }

  async componentDidMount() {
        const fetcheddata = await fetchdata();
        this.setState({data:fetcheddata})
    }

    handlecountrychange = async(country)=>{
 
//console.log(country)
        const fetcheddata = await fetchdata(country);
        this.setState({data:fetcheddata,country:country})
    }


    render() {

        const {data} = this.state
        const {country} = this.state

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <Countrypicker handlecountrychange={this.handlecountrychange} />
                <Chart data={data} country={country} />
                
            </div>
        
        )
        
    }
}


export default App