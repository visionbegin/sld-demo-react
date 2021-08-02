import branchData from './data/mp_rts96_branch.json';
import busData from './data/mp_rts96_bus.json';
import {SldGsi} from 'sld-gsi';
import 'sld-gsi/dist/style.css';
import './App.css';

function App() {
    return (
        <div className='demo-wrapper'>
            <SldGsi busData={busData} branchData={branchData} />
        </div>
    );
}

export default App;
