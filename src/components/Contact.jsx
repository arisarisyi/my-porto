import { FaWhatsapp } from "react-icons/fa"
import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { TfiEmail } from "react-icons/tfi"
import { useLight } from "../context/LightContext"

const Contact = () => {
  const date = new Date()
  const year = date.getFullYear()
  const { light } = useLight()
  return (
    <>
      <div className="border-t border-stone-900 pb-20">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-4 text-center text-4xl"
        >
          Contact
        </motion.h2>
        <div className="flex justify-center">
          <div className="space-y-8 mt-8">
            <motion.div
              className="flex"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
            >
              <div className="w-8 h-8 flex items-center p-1.5">
                <TfiEmail />
              </div>

              <div className="ml-4">
                <h4
                  className={`${
                    light ? "text-stone-800" : "text-stone-300"
                  } text-base font-semibold`}
                >
                  Email
                </h4>
                <p
                  className={`text-xs ${
                    light ? "text-stone-800" : "text-stone-400"
                  }`}
                >
                  Chat with me.
                </p>
                <p className="text-sm mt-2">{CONTACT.email}</p>
              </div>
            </motion.div>
            <motion.div
              className="flex"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
            >
              <div className="w-8 h-8 flex items-center p-1.5 ">
                <FaWhatsapp />
              </div>

              <div className="ml-4">
                <h4
                  className={`${
                    light ? "text-stone-800" : "text-stone-300"
                  } text-base font-semibold`}
                >
                  WhatsApp
                </h4>
                <p className="text-sm mt-4">{CONTACT.phoneNo}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center items-center pb-5 mb-8">
        Copyright © Al-Arisyi {year}. All rights reserved.
      </div>
    </>
  )
}

export default Contact
