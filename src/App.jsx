import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Router";
import { ImagesProvider } from "./context/ImageContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { FilterProvider } from "./context/FilterContext";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <FavoritesProvider>
          <FilterProvider>
            <div className="bg-gray-100 text-gray-900 min-h-screen">
              <Header />
              <main className="py-4">
                <Router />
              </main>
              <Footer />
            </div>
          </FilterProvider>
        </FavoritesProvider>
      </ImagesProvider>
    </BrowserRouter>
  );
}
