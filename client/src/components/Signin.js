//import React from "react";
import React from "react";
import { Link } from "react-router-dom";


const Signin = () => {

    const locale = 'en';
    const [today, setDate] = React.useState(new Date());

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
    console.log(date);
    console.log(time)
    return(
        
        <div>
            <h1>{date}</h1>
            <h2>{time}</h2>
            <form id="volinform">
                <table>
                    <tr>
                        <th>First and Last Name</th>
                        <th>Select Volunteer Type</th>
                        <th>Select Start Time</th>
                    </tr>
                    <tr>
                        <td><input type="text" id='playername' defaultValue={"Todd Larrington"}/></td>
                        <td>
                            <table>
                                <tr>
                                    <td><input type="radio" id="voltype1" name="voltype" value="Monster"/><label for="signout">Monster Town</label></td>
                                    <td><input type="radio" id="voltype2" name="voltype" value="Tavern"/><label for="signout">Tavern Shift</label></td>
                                    <td><input type="radio" id="voltype3" name="voltype" value="Safety"/><label for="signout">Safety Check In</label></td>
                                </tr>
                                <tr>
                                    <td><input type="radio" id="voltype4" name="voltype" value="Cleanup"/><label for="signout">Setup/CleanUp</label></td>
                                    <td><input type="radio" id="voltype5" name="voltype" value="Marshall"/><label for="signout">Marshalling</label></td>
                                    <td><input type="radio" id="voltype6" name="voltype" value="Media"/><label for="signout">Social Media</label></td>
                                </tr>
                            </table>
                        </td>
                        <td><input type="datetime-local" id='starttime'/></td>
                    </tr>
                    <tr><td><input type='submit' value="Submit"/></td></tr>
                </table>
                
            </form>
        </div>
    )

};

export default Signin;

