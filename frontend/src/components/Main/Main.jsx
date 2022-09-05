import { useState } from "react";
import Form from "../Form/Form";

const Activity = () => {

    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "activity": event.target[0].value,
                "details": event.target[1].value,
                "notes": event.target[2].value})
            })
            if (res.ok) {
                setMessage("Activity successfully added");
            }
            else {
                setMessage("Activity was unable to be added");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            {message}
            <Form handleSubmit={handleSubmit} />
        </>
    );
}

export default Activity;