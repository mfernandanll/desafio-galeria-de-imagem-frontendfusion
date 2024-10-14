import { Route, Routes } from "react-router-dom";
import { ImageGallery } from "./pages/ImageGallery";
import { ImageDetails } from "./pages/ImageDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ImageGallery />} />
      <Route path="/details/:imageId" element={<ImageDetails />} />
    </Routes>
  );
}
