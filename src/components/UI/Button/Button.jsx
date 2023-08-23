import classes from './Button.module.css';

const Button = ({ children }) => {
    const { button } = classes;
    
    return (
        <button className={ button }>
            { children }
        </button>
    );
};

export default Button;