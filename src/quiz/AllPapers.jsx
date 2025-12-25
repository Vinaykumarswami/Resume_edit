import React from 'react'
import Result from './Result'

const AllPapers = () => {
  return (
    <>
    <div >
        <thead>All Questions papers</thead>
        <table className="border justify-between w-[100%] text-center">
            <tr className="border-2 justify-between gap-2xl">
                <th>S. No</th>
                <th>Topic</th>
                <th>Paper Link </th>
                <th>Result</th>
            </tr>
            <tbody className="border-2">
                <tr className="border-2">
                    <td>1</td>
                    <td>Css</td>
                    <td></td>
                    <td><Result/></td>
                    </tr>
                     <tr>
                    <td>2</td>
                    <td>html</td>
                    <td></td>
                    <td><Result/></td>
                    </tr>
                     <tr>
                    <td>1</td>
                    <td>Css</td>
                    <td></td>
                    <td><Result/></td>
                    </tr>
                     <tr>
                    <td>1</td>
                    <td>Css</td>
                    <td></td>
                    <td><Result/></td>
                    </tr>
                     <tr>
                    <td>1</td>
                    <td>Css</td>
                    <td></td>
                    <td><Result/></td>
                    </tr>
            </tbody>
        </table>
    </div>

    </>
  )
}

export default AllPapers