import classes from './LabelEmail.module.css';

const LabelEmail = ({ children }) => {
    const { email } = classes;
    return (
        <label className={ email }>
            { children }
        </label>
    );
};

export default LabelEmail;