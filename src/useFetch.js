import { useState, useEffect } from "react";

const useFetch = (url) => { //Custom Hook
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortConst = new AbortController();//use it to stop a fetch

        setTimeout(() => { //wait for 1 second just to make the app more realistic, allowing loding to be shown for 1 sec

            console.log("useEffect ran");
            // inside useEffect we can do something like fetch data or communicate with some kind of authentication service 
            //this useEffect is very useful from running any kind of code you need to run every render.
            
            // let headers = new Headers();
            // headers.append('Content-Type', 'application/json');
            // headers.append('Accept', 'application/json');
            // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
            // headers.append('Access-Control-Allow-Credentials', 'true');
            // headers.append('GET', 'POST', 'OPTIONS');

            //fetch(url, {
            fetch(url, {
                signal: abortConst.signal, //Associate the above contoller(AbortController) with this fetch.Use it to stop a fetch
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                })
                .then(res => {
                    console.log(res);
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                //.catch((err) => {
                .catch(err => { //catch any kind of network error.
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted')
                    }else{
                        console.log(err.message); 
                        setIsPending(false);
                        setError(err.message);  
                    }
                })
        }, 1000);

        //return () => console.log('cleanup'); 
        return () => abortConst.abort(); //Abort whatever fetch it is associated with (signal: abortConst.signal, ). Use it to stop a fetch
    }, [url]);//this [] is dependency array, this is a basically array that we can pass into this useEffect hook as a second argument, you can add actuall dependeny to this array, any state values that should trigger the useEffect to run when they changed.   

    return {data, isPending, error};
}
 
export default useFetch;