import { BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"


export const Footer = () => {
    return (
        <div className="bg-[#2f2e2e] py-12 text-[#a39e9e]">
            <div className="p-5 sm:max-w-6xl mx-auto">
                <div className="w-full flex flex-col items-center justify-items-center">
                    <div className="w-full flex flex-col md:flex-row">
                        <div className="flex-1 lg:flex-2 mb-5 flex flex-col lg:flex-row">
                            <div className="flex-1 mb-5">
                                <h1 className="font-light uppercase font-playFair text-2xl tracking-wider">ABOUT US</h1>
                                <div className="max-w-80 mt-5 mb-25">
                                 <p className="font-roboto text-base">I'm a paragraph. Click here to add your own text and edit me.
                                  I’m a great place for you to tell a story and let your users know a little more about you.
                                 </p>
                                </div>
                                <div className="logo mt-5 flex gap-2">
                                    <FaFacebook />
                                    <BsInstagram />
                                </div>
                            </div>
                            <div className="flex-1 mb-5">
                                <h1 className="font-light uppercase font-playFair text-2xl tracking-wider">Address</h1>
                                <div className="max-w-80 mt-5 mb-10">
                                  <p>500 Terry Francine Street</p>
                                  <p>San Francisco, CA 94158</p>
                                </div>

                                <p>info@mysite.com</p>
                            </div>
                        </div>

                        <div className="flex-1 lg:flex-1">
                            <div className="flex flex-col items-start">
                            <h1 className="font-light uppercase font-playFair text-2xl tracking-wider">SUBSCRIBE FOR EMAILS</h1>
                            <div className="flex flex-col items-start space-y-5 w-full mt-5 mb-25">
                              <label htmlFor="">Email</label>
                              
                              <div className="w-full h-12 border-1 border-white flex items-center justify-items-center px-2">
                                <input type="text" className="w-full h-full outline-none" />
                              </div>
                              <input type="checkbox" />
                              <button>Subscribe Now</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex-col sm:flex items-center justify-between">
                        <p>© 2035 by HARMONY. Powered and secured by Wix</p>
                        <ul className="flex-col sm:flex items-center">
                            <li>Terms & conditions</li>
                            <li>Privacy policy</li>
                            <li>Accessibility statement</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}