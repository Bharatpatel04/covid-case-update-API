
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [data,setData]=useState([]);
  const getCovidData= async()=>{
  const res= await fetch('https://data.covid19india.org/data.json');
  const actualData= await res.json();
  setData(actualData.statewise);

  }
  useEffect(()=>{
       getCovidData();
  },[]);
  return (
    <div >
    
     <div className='container-fluid mt-5'>
      <div className=' main-heading'>
        <h1 className='mb-5 text-center' style={{color:'white'}}><span><strong>India </strong></span>Covid-19 Dashboard</h1>
      </div>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className='thead-dark'>
             <tr className='tr'>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recoverd </th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Updated</th>
             </tr>
          </thead>
          <tbody>
           {
            data.map((currElem,ind)=>{
                 return(
                  <tr key={ind}>
                  <td>{currElem.state}</td>
                  <td>{currElem.confirmed}</td>
                  <td>{currElem.recovered}</td>
                  <td>{currElem.deaths}</td>
                  <td>{currElem.active}</td>
                  <td>{currElem.lastupdatedtime}</td>
                 </tr>
                 )
            })
           }
         
          </tbody>
        </table>
        
      </div>
     </div>       
    </div>
  );
}

export default App;
