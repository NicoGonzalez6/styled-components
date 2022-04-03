import styled from 'styled-components';
import { DefaultButton } from './MyComponents/Buttons';
import './index.css';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <DefaultButton>Click Me</DefaultButton>
            <DefaultButton large>Click Me</DefaultButton>
        </div>
    );
}

export default App;
