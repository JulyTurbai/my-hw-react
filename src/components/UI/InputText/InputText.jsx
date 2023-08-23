import classes from './InputText.module.css';

const InputText = () => {
    const { name } = classes;
    return (
        <input type="text" className= { name }/>
    );
};

export default InputText;