import './App.css';
import Button from './components/UI/Button/Button';
import InputEmail from './components/UI/InputEmail/InputEmail';
import InputNumber from './components/UI/InputNumber/InputNumber';
import InputText from './components/UI/InputText/InputText';
import LabelEmail from './components/UI/LabelEmail/LabelEmail';
import LabelNumber from './components/UI/LabelNumber/LabelNumber';
import LabelText from './components/UI/LabelText/LabelText';
import TextArea from './components/UI/TextArea/TextArea';


function App() {
  return (
    <div className="container">
      
      <h1>My Form</h1>
      
      <LabelText>
          Enter name
          <i className="fa-regular fa-face-smile"></i>
          <InputText/>
      </LabelText>
      
      <LabelNumber>
          Enter number
          <i class="fa-solid fa-list-ol"></i>
          <InputNumber/>
      </LabelNumber>
      
      <LabelEmail>
          Enter Email
          <i class="fa-solid fa-envelope"></i>
          <InputEmail/>
      </LabelEmail>
      
      <Button>
        Send
        <i className="fa-regular fa-paper-plane"></i>
      </Button>

      <TextArea/>
      
    </div>
  );
}

export default App;
