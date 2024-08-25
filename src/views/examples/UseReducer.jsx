import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useReducer } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                {state.user ? (<span className="text">{state.user.name}</span>) 
                :  < span className="text">Não Logado</span>}
                <span className="text">{state.number}</span>
                <div>
                <button className="btn"
                    onClick={() => numberAdd2(dispatch)} >+2</button>
                <button className="btn"
                    onClick={() => dispatch({type: 'multiply7'})} >x7</button>
                <button className="btn"
                    onClick={() => dispatch({type: 'divide25'})} >/25</button>
                <button className="btn"
                    onClick={() => dispatch({type: 'arredondar'})} >Arredondar</button>
                <button className="btn"
                        onClick={() => dispatch({ type: 'addNewNumberN', payload: 9})} >+9</button>
                <button className="btn"
                        onClick={() => dispatch({ type: 'addNewNumberN', payload: 11 })} >+11</button>
                </div>
                <button className="btn" 
                    onClick={() => login(dispatch, 'Diego')}>Login</button>
            </div>

        </div>
    )
}

export default UseReducer
