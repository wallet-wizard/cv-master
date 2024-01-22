import { Routes, Route } from 'react-router-dom';

import EditorBasicInfo from './editorPaths/EditorBasicInfo';
import EditorSkills from './editorPaths/EditorSkills'
import EditorEdu from './editorPaths/EditorEdu';
import EditorExp from './editorPaths/EditorExp';
import EditorOther from './editorPaths/EditorOther';
import EditorArrSection from './editorPaths/EditorArrSection';


export default function Editor() {
  return (
    <div className="col">
        <Routes>
            <Route path="basic-info" element={<EditorBasicInfo />} />
            <Route path="skills" element={<EditorArrSection section={"skills"} />} />
            <Route path="experience" element={<EditorArrSection section={"experience"} />} />
            <Route path="education" element={<EditorEdu />} />
            <Route path="other" element={<EditorOther />} />
        </Routes>
    </div>
  );
}
