import { useState } from "react";
import Button from "../Button/Button";

const Activity = ({activity, handleUpdate, handleDelete, activityRef, detailsRef, notesRef}) => {

    const [edit, setEdit] = useState(false);


    const updateRecord = (id) => {
        setEdit(false);
        handleUpdate(id);
    }

    return (
        <>
            
            {
            edit ? 
            <tbody>
                <tr key = {activity.id}>
                    <td> <input ref={activityRef} defaultValue={activity.activity} type="text" /> </td>   
                    <td> <input ref={detailsRef} defaultValue={activity.details} type="text" /></td>
                    <td> <input ref={notesRef} defaultValue={activity.notes} type="text"/></td>
                    <td>
                    <Button name="Back" handleClick={() => setEdit(false)} isFormButton={true} />
                    <Button name="Update" handleClick={() => updateRecord(activity.id)} isFormButton={true} />
                    </td>
                </tr>
            </tbody>
            :

            <tbody>
                <tr key = {activity.id}>
                    <td> {activity.activity} </td>   
                    <td> {activity.details}</td>
                    <td> {activity.notes}</td>
                    <td>
                    <Button name="Edit" handleClick={() => setEdit(true)} isFormButton={true} />
                    <Button name="Delete" handleClick={() => handleDelete(activity.id)} isFormButton={true} />
                    </td>
                </tr>
            </tbody>

    }
        </>
    );
}

export default Activity;