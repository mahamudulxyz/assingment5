
const Footer = () => {
  return (
    <>
    <footer className="border-t border-gray-100 px-6 py-10">
      <div className="grid grid-cols-4 gap-10">

        <div>
          <img
            src="/src/assets/logo-text.png"
            alt="LOGO"
            className="h-8 w-auto"
          />
          <p className="mt-3 text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="mt-5 flex gap-4 text-sm text-gray-600">
            <li>GitHub</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold">PRODUCT</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-bold">LEGAL</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <div className="mt-10 flex justify-between border-t border-gray-100 pt-6 text-sm text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <ul className="flex gap-5">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </footer>
    </>
  );
};


export default Footer;
