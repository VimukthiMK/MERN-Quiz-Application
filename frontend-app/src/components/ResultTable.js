import React from 'react'

export default function ResultTable() {
  return (
    <div>
        <div className='Result-header'>
            <h2>Results</h2>
        </div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                      <tr className='table-body'>
                            <td>Amila</td>
                            <td>02</td>
                            <td>50</td>
                            <td>Passed</td>
                        </tr>
                
                
            </tbody>
        </table>
    </div>
  )
}
