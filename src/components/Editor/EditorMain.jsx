import { Routes, Route } from 'react-router-dom';
import EditorArrSection from './editorPaths/EditorArrSection';
import EditorStrSection from './editorPaths/EditorStrSection';

export default function Editor() {
  return (
    <div className="col">
        <Routes>
            <Route path="basic-info" element={<EditorStrSection key="basic-info" section="basic info" elements={["title", "summary"]} />} />
            <Route path="skills" element={<EditorArrSection key="skills" section={"skills"} />} />
            <Route path="experience" element={<EditorArrSection key="experience" section={"experience"} />} />
            <Route path="education" element={<EditorArrSection key="education" section={"education"} />} />
            <Route path="other" element={<EditorStrSection key="other" section="other" elements={["other"]} />} />
        </Routes>
    </div>
  );
}
