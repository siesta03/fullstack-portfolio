export default function Footer() {
  return (
    <footer className="w-full pt-8 pb-28 mt-auto border-t border-slate-200/50 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-slate-500">
          © {new Date().getFullYear()} Haziq Redzuan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}