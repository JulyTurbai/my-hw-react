import classes from './InputEmail.module.css'

const InputEmail = () => {
    const { email } = classes;
    return (
        <input type="email" className={ email }/>
    );
};

export default InputEmail;