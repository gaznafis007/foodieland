import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-8 px-10 sm:px-6 md:px-20">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          {/* Brand and Description */}
          <div className="space-y-2">
            <Image alt="logo" width={110} height={30} src={'/assets/logo.png'}/>
            <p className="text-gray-500 text-sm max-w-[300px]">Lorem ipsum dolor sit amet, consectetuipisicing elit.</p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6 text-sm">
            <Link href="/recipes" className="hover:text-gray-600">
              Recipes
            </Link>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About us
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
          <p className="text-sm text-gray-500">
            © 2024 <span className="text-[#FF642F]">SpiceZee</span>
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <FaFacebookF className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <FaTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

