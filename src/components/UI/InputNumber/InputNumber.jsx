import classes from './InputNumber.module.css'

const InputNumber = () => {
    const { number } = classes;
    return (
        <input type="number" className={ number }/>
    );
};

export default InputNumber;