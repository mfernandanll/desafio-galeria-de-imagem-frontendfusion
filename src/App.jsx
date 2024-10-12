import { Header } from "./components/Header";
import { ImageGallery } from "./components/ImageGallery";

export function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Header />
      <main className="min-h-screen py-4">
        <ImageGallery />
      </main>
    </div>
  );
}