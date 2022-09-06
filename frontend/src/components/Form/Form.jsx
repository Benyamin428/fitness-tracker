import "./Form.scss";

const Form = ({handleSubmit, editable, isEditable, activity}) => {
    return(
        <form className="form" onSubmit={editable ? event => handleSubmit(event, activity.id) : handleSubmit}>
            <label>Activity: </label>
            <input className="form__input" type="text" defaultValue={editable && activity.activity} required/>
            <br />
            <label>Details: </label>
            <input className="form__input" type="text" defaultValue={editable && activity.details} required/>
            <br />
            <label>Notes: </label>
            <input className="form__input" type="text" defaultValue={editable && activity.notes}/>
            <br />
            {editable && <button onClick={() => isEditable(false)}>Back</button>}
            <button>Submit</button>
        </form>
    );
}

export default Form;