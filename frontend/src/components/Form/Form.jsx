import Button from "../Button/Button";
import "./Form.scss";

const Form = ({handleSubmit, activityRef, detailsRef, notesRef}) => {
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label>Activity: </label>
            <input className="form__input" ref={activityRef} type="text" required/>
            <label>Details: </label>
            <input className="form__input" ref={detailsRef} type="text" required/>
            <label>Notes: </label>
            <input className="form__input" ref={notesRef} type="text"/>
            <Button name="Add Activity" />
        </form>
    );
}

export default Form;