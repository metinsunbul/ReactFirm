import React from 'react';

// import { useEffect, useState } from 'react';
import FirmsList from './FirmList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data: firms, isPending, error} = useFetch('https://localhost:7078/api/Firm/');

    
    //Delete Firm is Not implemented yet in the api
    //pass the handlePersonelList as a prop
    // const handlePersonelList = (id) => {
    //     const newFirms =  firms.filter(firm => firm.firmId !== id);
    //     setFirms(newFirms);
    // }

    // const [title, setTitle] = useState('');

    // const SearchFirm = (id) => {
    //    console.log(title);
    //    const newFirms =  firms.filter(firm => firm.name === title);
    //    if (title === '')
    //    {
    //         setFirms(newFirms);
    //    }
    //    else{
    //        setFirms(newFirms);
    //    }
    // }

    // return (  
    //     <div className="home">
    //         {/* <Search /> */}
    //         <div className="search">
    //             <input 
    //                 type="text" 
    //                 required 
    //                 value={title}
    //                 onChange={(e) => setTitle(e.target.value)}
    //                 />
    //             <button onClick={SearchFirm}>Firma Ara</button>
    //         </div>

    //         {/* prop is way to pass data from one component a parent(home) component into a child component(FirmList) 
    //         we can pass many prop like firms and title as below*/}
    //         {/* pass the handlePersonelList function as a prop */}
    //         {error && <div>{error}</div> }
    //         {isPending && <div>Loding...</div> }
    //         {firms && <FirmsList firms = {firms} title = "Tüm Firmalar" handlePersonelList = {handlePersonelList}  /> }   
           
    //        {/* filter */}
    //        {/* <FirmsList firms = {firms.filter((firm) => firm.name === 'Subilgi2' )} title = "Subilgi2 Firması"  />     */}

    //     </div>
    // );
    return (  
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loding...</div> }
            {firms && <FirmsList firms = {firms} title = "Tüm Firmalar" /> }   
        </div>
    );
}
 
export default Home;