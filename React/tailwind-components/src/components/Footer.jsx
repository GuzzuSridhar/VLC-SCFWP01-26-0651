import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
            <p className="text-pretty text-sm/6 text-gray-400">
              Making the world a better place through constructing elegant
              hierarchies and automating the mundane.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-x-3 text-sm/6 text-gray-400">
                    <EnvelopeIcon
                      className="size-5 text-indigo-500"
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:support@example.com"
                      className="hover:text-white"
                    >
                      support@example.com
                    </a>
                  </li>
                  <li className="flex items-center gap-x-3 text-sm/6 text-gray-400">
                    <PhoneIcon
                      className="size-5 text-indigo-500"
                      aria-hidden="true"
                    />
                    <a href="tel:+1234567890" className="hover:text-white">
                      +1 (234) 567-890
                    </a>
                  </li>
                  <li className="flex items-start gap-x-3 text-sm/6 text-gray-400">
                    <MapPinIcon
                      className="size-5 text-indigo-500 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      123 Tech Plaza,
                      <br />
                      Innovation City, ST 12345
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Legal</h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4 text-sm/6 text-gray-400"
                >
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs/6 text-gray-400">
            &copy; {new Date().getFullYear()} Your Company, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
