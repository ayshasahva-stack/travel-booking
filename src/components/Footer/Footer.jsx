import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-white mb-3">
              Wandrly<span className="text-amber-400">.</span>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-sm">
              We craft journeys that go beyond the ordinary. Every trip is a story
              waiting to be written — and we help you write it beautifully.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/destinations" className="hover:text-amber-400 transition-colors">All Destinations</Link></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Beach Escapes</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Adventure Trips</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cultural Journeys</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@wandrly.co</li>
              <li>+1 (800) 926-3759</li>
              <li className="pt-2">
                <div className="flex gap-3">
                  {["Instagram", "Twitter", "LinkedIn"].map((s) => (
                    <a key={s} href="#" className="text-xs px-2 py-1 border border-stone-600 rounded hover:border-amber-400 hover:text-amber-400 transition-colors">{s}</a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <span>© 2025 Wandrly. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
