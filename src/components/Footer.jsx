export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <footer className="text-center py-[1vh] px-0">
        <p className="flex items-center justify-center text-sm m-0 h-12">
          © {currentYear} | PicFinder
        </p>
      </footer>
    </footer>
  );
}
