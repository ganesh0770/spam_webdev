export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 hidden md:block
">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">Spam Classifier</h2>
            <p className="mt-3 text-gray-400 text-sm">
              AI-powered message filtering for safer communication.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-400">spam@spamclassifier.com</p>
            <p className="text-sm text-gray-400 mt-1">xxxxxx</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2024 Spam Classifier. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
