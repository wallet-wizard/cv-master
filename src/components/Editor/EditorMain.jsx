import { Router, Routes, Route } from 'react-router-dom';
import EditorArrSection from './editorPaths/EditorArrSection';
import EditorStrSection from './editorPaths/EditorStrSection';
import EditorNewCV from './editorPaths/EditorNewCV';
import { EditorSideBtn } from './EditorSideBar';

export default function Editor() {
  return (
    <div className="col">
        <EditorSideBtn />
        <Routes>
            <Route path="/" element={<EditorNewCV key="/editor" />} />
            <Route path="basic-info" element={<EditorStrSection key="basic-info" section="basic info" elements={["title", "summary"]} />} />
            <Route path="skills" element={<EditorArrSection key="skills" section={"skills"} />} />
            <Route path="experience" element={<EditorArrSection key="experience" section={"experience"} />} />
            <Route path="education" element={<EditorArrSection key="education" section={"education"} />} />
            <Route path="other" element={<EditorStrSection key="other" section="other" elements={["other"]} />} />
        </Routes>
    </div>
  );
}
