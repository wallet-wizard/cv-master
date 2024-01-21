import React from 'react'
import './myCVs.css'


export default function MyCVs(){
    return(
        <div id='page-div'>
            <div id='table-div' className='p-5'>
                <table className="table table-striped"> 
                    <thead>
                        <tr>
                        <th className='top-left text-center'>Company</th>
                        <th className='text-center'>CV</th>
                        <th className='text-center'>Cover Letter</th>
                        <th className='top-right text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='py-3'>
                        <tr>
                        <td>CV Master</td>
                        <td>Intern-CV.pdf</td>
                        <td>Obviously</td>
                        <td>Under Review</td>
                        </tr>

                        <tr>
                        <td>CV Master</td>
                        <td>Intern-CV.pdf</td>
                        <td>Obviously</td>
                        <td>Under Review</td>
                        </tr>
                    </tbody>
                    </table>
                    <div id='btn-div'>
                        <button className='btn btn-primary' id='add-application'>Add Application</button>
                    </div>
                </div>
        </div>
        
    )
}