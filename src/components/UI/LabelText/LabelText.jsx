
import classes from './LabelText.module.css';


const LabelText = ({ children, ...props }) => {
    const { name } = classes;
    return (
        <label className={ name }>
            { children }
        </label>
    );
};

export default LabelText;