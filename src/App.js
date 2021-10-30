import './App.scss'
import AutoComplete from './AutoComplete'

function App() {
    return (
        <div className='app'>
            <div className='wrapper'>
                <h1>Welcome to the Code Challenge</h1>
                <h2>We look forward to working with you</h2>

                <div>
                    <AutoComplete />
                </div>
            </div>
        </div>
    )
}

export default App
