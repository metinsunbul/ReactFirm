import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const FirmDetails = () => {

    const { firmId } = useParams() //To grab parameters from the route
    const { data: firm, error, isPending } = useFetch('https://localhost:7078/api/Firm/' + firmId);
    const histor = useHistory();//used to redirect user to home back (go back and forward through the history )

    const handleClick = () => {
        fetch('https://localhost:7078/api/Firm?id=' + firm.firmId, {
            method: "DELETE"
        }).then(()=> {
            histor.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {/* <h2>Firm Details - {firmId} </h2> */}
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { firm && (
                <article>
                    <h2>{ firm.title }</h2>
                    <p>Yetkili :{firm.authority}</p>     
                    <p>Mail :{firm.email}</p>     
                    <p>Firma Performans Değeri :{firm.firmPerformansScore}</p>     
                    <p>Açık gaz yüzdesi :{firm.gasOpenningPercentage}</p>     
                    <p>Yetkili mi? :{firm.haveAuthority}</p>     
                    <p>Telefon Numarası :{firm.phone}</p>
                    <div>{firm.address}</div>

                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default FirmDetails;