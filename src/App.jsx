import './App.css'
import CustomizedTimeline from './Timeline';

function App() {

  return (
    <div style={{display: 'flex'}}>
      {/* Your content here */}

      <img src='/background2.png' />
      {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', background: 'slate'}}> */}
      <div className='timeline'>
        <h1>Timeline</h1>
        <CustomizedTimeline />
      </div>

    </div>
  );
}

export default App
