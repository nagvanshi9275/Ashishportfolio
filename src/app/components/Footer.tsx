export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black text-center">
      <p className="text-text-secondary text-sm">
        © {new Date().getFullYear()} Ashish Nagvanshi. All rights reserved.
      </p>
    </footer>
  );
}