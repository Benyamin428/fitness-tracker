import { useState } from "react";
import Form from "../Form/Form";

const Activity = ({activity, handleUpdate, handleDelete}) => {

    const [edit, setEdit] = useState(false);

    return (
        <div className="activity">
            {edit ? <Form editable={true} isEditable={setEdit} activity={activity} handleSubmit={handleUpdate}/> 
            :
            <>
            <p>Activity: {activity.activity}</p>
            <p>Details: {activity.details}</p>
            <p>Notes: {activity.notes}</p>
            <p>Date: {activity.dateCreated}</p>
            <button onClick={() => setEdit(true)}>Edit</button>
            <button onClick={() => handleDelete(activity.id)}>Delete</button>
            </>
    }
        </div>
    );
}

export default Activity;