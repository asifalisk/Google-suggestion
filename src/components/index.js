import styles from "../components/index.module.css"

import {Component} from 'react';

class Suggestion extends Component{
    
    render(){
        const {suggestionlist,updateSearchInput}=this.props
        const {suggestion}=suggestionlist;
        const onClickSuggestion=()=>{
            updateSearchInput(suggestion)
        }        
        return(
            <div className={styles.li}>
                <p>{suggestion}</p>
                <button onClick={onClickSuggestion} className={styles.btn}>^</button>
            </div>
        )
    }
}

export default Suggestion