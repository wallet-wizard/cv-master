import React from 'react'
import { useGlobalContext } from '../../utils/GlobalContext'
import './MyCVs.css'
import Accordion from 'react-bootstrap/Accordion';
import ReactMarkdown from 'react-markdown';

export default function MyCVs() {
    const { userData, getCVMDatabase, getCVMCurrentUser } = useGlobalContext();
    // const str = JSON.stringify(userData, null, 10)
    const userCVs = userData.userCVs ? userData.userCVs : [];
    console.log(userCVs)

    const userCVEls = userCVs.map((CV, index) => {
        const CVtitle = CV.title;
        const lastModified = CV.lastModified;

        const data = CV.data;
        const title = data.title;
        const summary = data.summary;
        const skillsHeader = data.skills.header;
        const skillsArr = data.skills.skills;
        const expHeader = data.experience.header;
        const expArr = data.experience.experience;
        const eduHeader = data.education.header;
        const eduArr = data.education.education;
        const other = data.other;


        function handleArr(header, bodyArr) {
            let combined = `${header}\n`;
            for (const body of bodyArr) {
                combined += body;
                combined += `\n`;
            }
            return combined;
        }

        const skills = handleArr(skillsHeader, skillsArr);
        const exp = handleArr(expHeader, expArr);
        const edu = handleArr(eduHeader, eduArr);

        const combinedText = (
            `${title}
  ${summary}

  ${skills}

  ${exp}

  ${edu}

  ${other}
  `
        )

        return (
            <Accordion.Item eventKey={`CVitem-${index}`}>
                <Accordion.Header>{`CV${index + 1} --  ${CVtitle}`}</Accordion.Header>
                <Accordion.Body>
                <ReactMarkdown>
                    {combinedText}
                </ReactMarkdown>
                </Accordion.Body>
            </Accordion.Item>
        )
    }
    );

    const currentDB = getCVMDatabase();
    const currentUser = getCVMCurrentUser();
    const USRDATA = currentDB.filter(el => el.userData.username === currentUser && el)

    return (
        <div className='myCVsWrapper'>
            <h3>
                <div className="container-fluid myCVsWrapper-grid">
                    <Accordion defaultActiveKey="0">
                        {userCVEls}
                    </Accordion>
                </div>
            </h3>
        </div>
    )
}


{/* <div className="CV-item container-fluid">
<div className="row">
    <div className="col title">{title}</div>
    <div className="col lastModified">{lastModified}</div>
    <button className="col btn actions">ACTIONS</button>
</div>
</div> */}