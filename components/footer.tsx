import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-lg font-bold">NutriWellness</span>
            </Link>
            <p className="text-sm text-gray-500">
              Empowering you to achieve optimal health through personalized nutrition guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Personalized Meal Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Nutrition Coaching
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Group Workshops
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Corporate Wellness
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-green-600">
                  Online Courses
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-500">123 Nutrition Street, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-500">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-500">info@nutriwellness.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NutriWellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
