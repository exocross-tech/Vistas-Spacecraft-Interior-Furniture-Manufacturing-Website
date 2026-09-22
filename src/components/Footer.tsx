export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0c0c0e] border-t border-neutral-800/80 py-8 px-4 text-center">
      <p className="text-xs sm:text-[13px] text-neutral-400 font-normal tracking-wide">
        &copy; {currentYear} Company Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
