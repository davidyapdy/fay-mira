export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p>Designed & built with care</p>
      </div>
    </footer>
  );
}
