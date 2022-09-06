import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Activity from "../Activity/Activity";
import "./Main.scss";

const Main = () => {

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
    }, [message])

    const handleUpdate = async(event, id) => {
        event.preventDefault();
        try {
            const res = await fetch(`http://localhost:8080/activities/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "activity": event.target[0].value,
                "details": event.target[1].value,
                "notes": event.target[2].value})
            })
            if (res.ok) {
                setMessage("Activity successfully updated");
            }
            else {
                setMessage("Activity was unable to be updated");
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async(id) => {
        try {
            const res = await fetch(`http://localhost:8080/activity/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                setMessage("Activity deleted");
            }
            else {
                setMessage("Activity was unable to be deleted");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            {message}
            <Form handleSubmit={handleSubmit} />
            {activities.map(activity => {
                return (
                <Activity key={activity.id} activity={activity} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                )
            })}
        </>
    );
}

export default Main;