import classes from './TextArea.module.css';

const TextArea = ({ children, ...props}) => {
    const { area } = classes;
    return (
        <textarea className={ area } {...props} cols="30" rows="10">
            { children }
        </textarea>
    );
};

export default TextArea;