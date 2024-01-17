import EditorSideBar from './EditorSideBar';
import EditorBasicInfo from './editorPaths/EditorBasicInfo';
import { Routes, Route } from 'react-router-dom';

export default function Editor() {
  return (
    <div className="col">
        <Routes>
            <Route path="basic-info" element={<EditorBasicInfo />} />
        </Routes>
    </div>
  );
}
