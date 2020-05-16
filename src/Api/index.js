import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchdata = async (country) =>{

    let changeurl= url;

if(country && country!=="global" ){
    changeurl=`${url}/countries/${country}`
}


    try{

        const { data } = await axios.get(changeurl)

        const modofieddata={
            confirmed:data.confirmed,
            recovered:data.recovered,
            deaths:data.deaths,
            lastUpdate:data.lastUpdate
        }

        return modofieddata
          
    }catch(error){
    }

}

export const fetchDailydata = async() =>{

    try{
        const {data} = await axios.get(`${url}/daily`)

       const modifieddata = data.map((dailydata)=>({
           confirmed:dailydata.confirmed.total,
           deaths:dailydata.deaths.total,
           date:dailydata.reportDate
       }))
       

       return modifieddata
    } catch(error){

    }

}

export const countries = async()=>{
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)

        return countries.map((country)=>country.name)
    } catch (error) {
        
    }
}

