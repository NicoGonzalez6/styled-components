import styled from 'styled-components';
import BasicTitle from './MyComponents/BasicTitle';
import { DefaultButton } from './MyComponents/Buttons';

function App() {
    return (
        <div style={{ padding: '2rem' }}>
            <BasicTitle> Styled Components </BasicTitle>
            <DefaultButton>Click Me</DefaultButton>
        </div>
    );
}

export default App;
