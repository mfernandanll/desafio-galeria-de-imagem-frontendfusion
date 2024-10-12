import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 text-gray-900 min-h-screen">
        <Header />
        <main className="py-4">
          <Router/>
        </main>
      </div>
    </BrowserRouter>
  );
}