import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-primary/20 mt-20">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">💪 Local Gym</h3>
            <p className="text-gray-400 text-sm">
              Your fitness journey starts here. Join us today and transform your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">Classes</Link></li>
              <li><Link to="/trainers" className="text-gray-400 hover:text-primary transition-colors">Trainers</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/membership" className="text-gray-400 hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 info@localgym.com</li>
              <li>📱 (555) 123-4567</li>
              <li>📍 123 Fitness Ave, City, State 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Local Gym. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
