import React from 'react'
import { useGlobalContext } from '../../utils/GlobalContext'

export default function MyCVs(){
    const { userData, getCVMDatabase, getCVMCurrentUser } = useGlobalContext();
    // const str = JSON.stringify(userData, null, 10)

    const currentDB = getCVMDatabase();
    const currentUser = getCVMCurrentUser();
    const USRDATA = currentDB.filter(el => el.userData.username === currentUser && el )
    console.log(USRDATA)
    return(
        <>
            <h1>Hello from MyCVs! </h1>
            <h3>
                {JSON.stringify(USRDATA)}
            </h3>
        </>
    )
}