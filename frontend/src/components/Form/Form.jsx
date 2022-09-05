const Form = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Submit</button>
        </form>
    );
}

export default Form;