import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(n1, n2) {
    const future = Date.now() + 1000
    while(Date.now() < future) {}
    return n1 + n2
}

const UseMemo = (props) => {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)

    const result = useMemo(() => sum(num1, num2), [num1, num2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <input type="number" className="input" value={num1} onChange={e => setNum1(parseInt(e.target.value))} />
                <input type="number" className="input" value={num2} onChange={e => setNum2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={num3} onChange={e => setNum3(parseInt(e.target.value))} />
                <div>
                    <span className="text">Soma: </span>
                    <span className="text red">{result}</span>
                </div>
            </div>
        </div>
    )
}

export default UseMemo
