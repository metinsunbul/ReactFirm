
import React from 'react';
import { Link } from 'react-router-dom';

//const FirmsList = (props) => {//we need to receive the firms prop in this component
 {/* accept the handleDelete function as a prop */}
const FirmsList = ({firms,  title, handlePersonelList}) => {//we need to receive the firms prop in this component

    // const firms  = props.firms;
    // const title = props.title;
    
    //console.log(props, firms);
    
    return ( 
        <div className="blog-list">
            
            <h2>{title}</h2>
             { firms && firms.map((firm) => (
                    <div className="blog-preview" key={firm.firmId}>
                            <Link to={`/firms/${firm.firmId}`}>
                                <h2>{firm.name}</h2>
                                <p><b>Firma :</b>{firm.title}</p>     
                                <p><b>Adres :</b>{firm.address}</p>     
                                <p><b>Yetkili :</b>{firm.authority}</p>     
                                <p><b>Mail :</b>{firm.email}</p>     
                                <p><b>Firma Performans Değeri :</b>{firm.firmPerformansScore}</p>     
                                <p><b>Açık gaz yüzdesi :</b>{firm.gasOpenningPercentage}</p>     
                                <p><b>Yetkili mi? :</b>{firm.haveAuthority?'true':'false'}</p>     
                                <p><b>Telefon Numarası :</b>{firm.phone}</p>
                            </Link>
                            
                            <button onClick={() => handlePersonelList(firm.firmId)}>Personel Listesi</button>     
                    </div>
                ))};             
        </div>
     );
}
 
export default FirmsList;