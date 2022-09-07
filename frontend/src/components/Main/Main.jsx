import { useEffect, useState, useRef } from "react";
import Form from "../Form/Form";
import Activity from "../Activity/Activity";
import "./Main.scss";

const Main = () => {

    const [activities, setActivities] = useState([]);

    const activityRef = useRef(null);
    const detailsRef = useRef(null);
    const notesRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch("http://localhost:8080/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "activity": activityRef.current.value,
                "details": detailsRef.current.value,
                "notes": notesRef.current.value})
            })
            if (res.ok) {
                fetchData();
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

    const handleUpdate = async(id) => {
        try {
            const res = await fetch(`http://localhost:8080/activities/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({   
                "activity": activityRef.current.value,
                "details": detailsRef.current.value,
                "notes": notesRef.current.value})
            })
            if (res.ok) {
                fetchData();
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
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="container">
            <Form 
            handleSubmit={handleSubmit}
            activityRef={activityRef}
            detailsRef={detailsRef}
            notesRef={notesRef}
            />

            <h2 className="title">List of Activities</h2>

            <table className="table">
                <thead className="table__thead">
                    <tr className="table__tr">
                        <th className="table__th">Activity</th>
                        <th>Details</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {activities.map(activity => {
                    return (
                    <Activity 
                    key={activity.id} 
                    activity={activity} 
                    handleUpdate={handleUpdate} 
                    handleDelete={handleDelete} 
                    activityRef={activityRef}
                    detailsRef={detailsRef}
                    notesRef={notesRef}
                    />
                    )
                })}
            </table>
        </div>
    );
}

export default Main;