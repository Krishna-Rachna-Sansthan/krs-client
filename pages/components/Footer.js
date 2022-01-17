import {FaTwitter,FaFacebook,FaInstagram,FaYoutube,FaMail} from 'react-icons/fa'
import {MailIcon} from "@heroicons/react/outline"

import {Button, TextField} from '@material-ui/core'

import Maps from './Maps'

function Footer() {
    return (
        <div>
            <div className="bg-[#071f30] w-full flex ">
                <div className="w-2/6 h-96">
                    <center>
                        <h1 className="font-mono text-[2rem] text-cyan-50">KRS</h1><br/>
                        <div className="flex text-[30px] mx-[12rem] text-cyan-50">
                            <FaTwitter/>
                            <FaInstagram/>
                            <FaFacebook/>
                            <FaYoutube/>
                        </div><br/>
                        <Maps/>
                    </center>
                </div>
                <div className="w-1/6 text-cyan-50">
                    <h2 className="text-[2rem] text-gray-700">Support</h2><br/>
                    <h2 className="text-[1rem]">Contact us</h2>
                    <h2 className="text-[1rem]">FAQ</h2>
                    <h2 className="text-[1rem]">Downloads</h2>
                    <h2 className="text-[1rem]">Registration</h2>
                </div>
                <div className="w-1/6 text-cyan-50">
                    <h2 className="text-[2rem] text-gray-700">KRS</h2><br/>
                    <h2 className="text-[1rem]">About KRS</h2>
                    <h2 className="text-[1rem]">KRS Commitments</h2>
                    <h2 className="text-[1rem]">Directors</h2>
                </div>
                <div className="w-2/6 text-cyan-50">
                    <div className="flex">
                        <MailIcon className="h-12"/>
                        <h1 className="text-[2rem]">Stay Connected with KRS</h1>
                    </div><br/><br/>
                    <TextField  className="bg-white text-center w-[30rem]" label="Enter E-mail Address"/><br/>
                    <button className="bg-red-800 text-[1.5rem] mx-[1.5rem] my-[2rem] w-[15rem]">CLick</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
