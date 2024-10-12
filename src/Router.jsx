import { Route, Routes } from "react-router-dom";
import { ImageGallery } from "./components/ImageGallery";
import { ImageDetails } from "./components/ImageDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ImageGallery />} />
      <Route path="/details/:imageId" element={<ImageDetails />} />
    </Routes>
  );
}
