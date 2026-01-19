export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-muted mb-2">
          You made it so far{" "}
          <span className="inline-block animate-pulse">&#9734;</span>{" "}
          <a href="#contact" className="text-accent hover:underline">
            Let&apos;s talk!
          </a>
        </p>
        <p className="text-xs text-muted/60">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
      </div>
    </footer>
  );
}
