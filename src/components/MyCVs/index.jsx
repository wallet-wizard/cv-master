import React, { useState } from 'react'
import { useGlobalContext } from '../../utils/GlobalContext'
import './MyCVs.css'
import Accordion from 'react-bootstrap/Accordion';
import ReactMarkdown from 'react-markdown';

export default function MyCVs() {
    console.log("MyCVs component Rendered")
    const { userData, getCVMDatabase, getCVMCurrentUser } = useGlobalContext();
    const [currentSelection, setCurrentSelection] = useState(null);

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


        function getIndex(e, index) {
            console.log(e.target)
            console.log(index)
            setCurrentSelection(index)
        }

        function checkLastDigit(index) {
            // Get the last digit of the index
            const lastDigit = index % 10;
            console.log(index)
            // Check if the last digit is one of the specified values
            if (lastDigit === 1 || lastDigit === 3 || lastDigit === 5 || lastDigit === 7 || lastDigit === 9) {
              return "lighter";
            } else {
              return "";
            }
          }

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
            <div className="cv-item" key={`CVitemKey-${index}`} id={`${index}`} onClick={(e) => getIndex(e, index)}>
                <Accordion.Item eventKey={`CVitem-${index}`} >
                    <Accordion.Header className={ checkLastDigit(index) }>{`CV${index + 1} --  ${CVtitle}`}</Accordion.Header>
                    <Accordion.Body>
                    <ReactMarkdown className="previewCV">
                        {combinedText}
                    </ReactMarkdown>
                    <div className="previewTools">

                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        )
    }
    );

    const currentDB = getCVMDatabase();
    const currentUser = getCVMCurrentUser();
    const USRDATA = currentDB.filter(el => el.userData.username === currentUser && el)

    return (
        <div className='myCVsWrapper'>
            <div className="CVTools container-fluid">
                <button className='btn col tool modifyBtn'>Modify</button>
                <button className='btn col tool duplicateBtn'>Duplicate</button>
                <button className='btn col tool removeBtn'>Remove</button>
            </div>
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