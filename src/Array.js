import { useState } from "react";
 
export default function ObjectJson() {
    const [array, setArray]=useState(["one","two","three"])
    const [user, setUser] = useState([{ firstname: "Sazeed", lastname: "abcd" }, { firstname: "pavan", lastname: "xyz" }])
    const [employee, setEmployee] = useState([{ firstname: "Sam", lastname: "kjhg", emailid: "sam@gmail.com", password: "hkjhfcds", repassword: "fsjieos" }, { firstname: "Mohd", lastname: "krishnan", emailid: "shakah@gmail.com", password: "contract", repassword: "contract" }])
    return <>
        <label>Employee :</label><br />
        {employee.map((item, index) => {
            return <>
                {JSON.stringify(item)} <br />
                {item.firstname}<br />
                {index}<br />
            </>
 
        })}
 
        {
            user.map(
                (itm, indx) => {
                    return <>{indx}- {JSON.stringify(itm)} # {itm.firstname} #{itm.lastname} <br /></>
                }
            )
        }
        {
            JSON.stringify(user[0])//json to string
        }
        <br/>
        {
            array[0]
        }
        <br/>
        {
            user[0].firstname
        }
 
    </>
}
