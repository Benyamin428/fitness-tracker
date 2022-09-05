import { useEffect, useState } from "react";
import Form from "../Form/Form";
import "./Main.scss";

const Activity = () => {

    const [message, setMessage] = useState("");
    const [activities, setActivities] = useState([]);

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

    const fetchData = async() => {
        try {
            const res = await fetch("http://localhost:8080/getAllActivities");
            if (res.ok) {
                setActivities(await res.json());
            }
        } catch (error) {
            console.log(error);
        }   
    }

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <>
            {message}
            <Form handleSubmit={handleSubmit} />
            {activities.map(activity => {
                return (
                <div className="activity" key={activity.id}>
                    <p>Activity: {activity.activity}</p>
                    <p>Details: {activity.details}</p>
                    <p>Notes: {activity.notes}</p>
                </div>
                )
            })}
        </>
    );
}

export default Activity;