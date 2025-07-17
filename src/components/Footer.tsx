import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bg-[#2f2e2e] py-12 text-[#a39e9e]">
            <div className="px-5 max-w-6xl mx-auto">
                <div className="w-full flex flex-col items-center">
                    {/* Main Footer Content */}
                    <div className="w-full flex flex-col md:flex-row gap-8 mb-12">
                        {/* About Section */}
                        <div className="flex-1">
                            <h1 className="font-light uppercase text-xl tracking-wider mb-5">ABOUT US</h1>
                            <div className="max-w-xs mb-6">
                                <p className="text-base">
                                    I&apos;m a paragraph. Click here to add your own text and edit me.
                                    I&apos;m a great place for you to tell a story and let your users know a little more about you.
                                </p>
                            </div>
                            <div className="flex gap-4 text-xl">
                                <FaFacebook className="hover:text-white cursor-pointer" />
                                <BsInstagram className="hover:text-white cursor-pointer" />
                            </div>
                        </div>

                        {/* Address Section */}
                        <div className="flex-1">
                            <h1 className="font-light uppercase text-xl tracking-wider mb-5">ADDRESS</h1>
                            <div className="mb-6 space-y-1">
                                <p>500 Terry Francine Street</p>
                                <p>San Francisco, CA 94158</p>
                                <p>info@mysite.com</p>
                            </div>
                        </div>

                        {/* Newsletter Section */}
                        <div className="flex-1">
                            <h1 className="font-light uppercase text-xl tracking-wider mb-5">SUBSCRIBE</h1>
                            <div className="w-full space-y-4">
                                <label htmlFor="email" className="block">Email</label>
                                <div className="w-full h-12 border border-[#a39e9e] flex items-center px-3">
                                    <input 
                                        type="email" 
                                        id="email"
                                        className="w-full h-full bg-transparent outline-none text-white"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="subscribe" />
                                    <label htmlFor="subscribe">Subscribe to newsletter</label>
                                </div>
                                <button className="px-6 py-2 bg-[#a39e9e] text-[#2f2e2e] hover:bg-white transition-colors w-full">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="w-full pt-6 border-t border-[#a39e9e] flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p>©{new Date().getFullYear()} Ahnibaba</p>
                        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Accessibility Statement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};