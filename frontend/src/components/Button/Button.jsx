import "./Button.scss";

const Button = ({name, handleClick, isFormButton}) => {
    return(
        <button className={isFormButton ? "button button--form" : "button"} onClick={handleClick}>{name}</button>
    );
}

export default Button;