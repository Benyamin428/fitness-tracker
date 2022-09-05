import "./Form.scss";

const Form = ({handleSubmit}) => {
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label>Activity: </label>
            <input className="form__input" type="text" />
            <br />
            <label>Details: </label>
            <input className="form__input" type="text" />
            <br />
            <label>Notes: </label>
            <input className="form__input" type="text" />
            <br />
            <button>Submit</button>
        </form>
    );
}

export default Form;