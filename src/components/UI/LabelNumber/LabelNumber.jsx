import classes from './LabelNumber.module.css';

const LabelNumber = ({ children, ...props}) => {
    const { number } = classes;
    return (
        <label className={ number }>
            { children }
        </label>
    );
};

export default LabelNumber;