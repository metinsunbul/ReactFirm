import React, { useState } from "react";
import { useHistory } from "react-router-dom"; //this hook used to redirect user to home back (go back and forward through the history )

const Create = () => {

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [haveAuthority, setHaveAuthority] = useState(false);
    const [personel, setPersonel] = useState([
        {
          "personelId": 0,
          "name": "string",
          "surname": "string",
          "phone": "string",
          "firmId": 0
        }
      ]);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [authority, setAuthority] = useState('metin');
    const [firmPerformansScore, setFirmPerformansScore] = useState('');
    const [gasOpenningPercentage, setGasOpenningPercentage] = useState('');
    const [isPending, setIsPending] = useState(false);
    const histor = useHistory();//used to redirect user to home back (go back and forward through the history )
    const handleSubmit = (e) => {
        e.preventDefault();
        const firm = 
        {name,title,haveAuthority,personel, address, phone, email, authority, firmPerformansScore, gasOpenningPercentage};

        //console.log(firm);
        
        setIsPending(true);

        fetch('https://localhost:7078/api/Firm/', {
            method: "POST",
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(firm)
        }).then(() =>{
            console.log('new firm added');
            setIsPending(false);

            //go back through history, go forward through history, so that's like clicking back and forward arrows but also redirect the user 
           //histor.go(-1);// - go back several step thorugh history
           histor.push('/');//for redirect
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Firm</h2>
            <form onSubmit={handleSubmit}>
                <label>Firm name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}></input>
                <label>Firm title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Firm haveAuthority:</label>
                <input type="text" required value={haveAuthority} onChange={(e) => setHaveAuthority(e.target.value)}></input>
                <label>Firm address:</label>
                <textarea required value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                <label>Firm phone:</label>
                <input type="text" required value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                <label>Firm email:</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Firm authority:</label>
                <select value={authority} onChange={(e) => setAuthority(e.target.value)}>
                    <option value="metin">metin</option>
                    <option value="kayra">kayra</option>
                    <option value="bugra">bugra</option>
                </select>
                <label>Firm performansScore:</label>
                <input type="text" required value={firmPerformansScore} onChange={(e) => setFirmPerformansScore(e.target.value)}></input>
                <label>Firm gasOpenningPercentage:</label>
                <input type="text" required value={gasOpenningPercentage} onChange={(e) => setGasOpenningPercentage(e.target.value)}></input>
                
                { !isPending && <button>Add Firm</button> }
                { isPending && <button disabled>Adding Firm...</button> }

                {/* <p>{ name }</p>
                <p>{ title }</p>
                <p>{ haveAuthority }</p>
                <p>{ address }</p>
                <p>{ phone }</p>
                <p>{ email }</p>
                <p>{ authority }</p>
                <p>{ firmPerformansScore }</p>
                <p>{ gasOpenningPercentage }</p> */}

            </form>
        </div>
     );
}
 
export default Create;