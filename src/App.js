import {Component} from 'react'
import './App.css';
import Suggestion from './components/index.js'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class App extends Component{
  state={input:""}
  inputchange=(event)=>{
    this.setState({input:event.target.value})
  }
  updateSearchInput=(value)=>{
    this.setState({input:value})
  }

  render(){
    const {input}=this.state
    const statuschange= suggestionsList.filter((eachsuggestion)=>
      eachsuggestion.suggestion.includes(input)
    )
    return(
      <div className="container">
        <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" width="250px" alt="google"/>
        <div className='cont'>
          <div className='inputcont'> 
            <img className='serchimg' src='https://assets.ccbp.in/frontend/react-js/google-search-icon.png' width='25px' alt='search'/>
            <input className='inputserach' value={input} onChange={this.inputchange}  type="search" />
          </div>
          <ul className='ullist'>
            {
              statuschange.map((eachsuggestion)=>
              <Suggestion updateSearchInput={this.updateSearchInput} suggestionlist={eachsuggestion} key={eachsuggestion.id} />
              )
            }
          </ul>
          
        </div>
      </div>
    )
  }
}

export default App;
