import React from "react";
import {useState, useRef } from "react";
import { Link } from "react-router-dom";

const Signout = () => {
    const formRef = useRef(null)
    const [name, setName] = useState("");
    const [starttime, setStart] = useState("");
    const locale = 'en';
    const [today, setDate] = React.useState(new Date());
    const [loading, setLoading] = useState(false)
    console.log(loading)

//Here is where the information to both save to LocalStorage AND send to Google Sheets logic will probably have to go.
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)

        alert(`Your name is: ${name}
                Ending at: ${starttime}`)
            }

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    },[]);

    const day = today.toLocaleDateString(locale, {weekday: 'long'});
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  
  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    return(
        
        <div>
            <h1>Volunteer Sign Out Page</h1>
            <h1>{date}</h1>
            <h2>{time}</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <th>First and Last Name</th>
                        {/* <th>Select Volunteer Type</th> */}
                        <th>Select Start Time</th>
                    </tr>
                    <tr>
                        <td><input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}/></td>
                        <td>
                        {/* <table onChange={handleValueChange}>
                                <tr>
                                    <input type="radio" id="voltype1" name="voltype" value="Monster"/>Monster Town
                                    <input type="radio" id="voltype1" name="voltype" value="Tavern"/>Tavern Shift
                                    <input type="radio" id="voltype1" name="voltype" value="Safety"/>Safety Check In
                                </tr>
                                <tr>
                                    <input type="radio" id="voltype1" name="voltype" value="Cleanup"/>Set Up / Clean Up
                                    <input type="radio" id="voltype1" name="voltype" value="Marshal"/>Marshalling
                                    <input type="radio" id="voltype1" name="voltype" value="Media"/>Social Media
                                </tr>
                        </table> */}
                        </td>
                        <td><input 
                                type="datetime-local" 
                                value={starttime}
                                onChange={(e) => setStart(e.target.value)}/></td>
                    </tr>
                    <tr>
                        
                        
                    </tr>
                    <tr><td><input type='submit' value="Submit"/></td></tr>
                    <tr><td><Link to="/"><button>Back</button></Link></td></tr>
                </table>
                
            </form>
        </div>
    )




};

export default Signout;