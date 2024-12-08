import { motion } from "framer-motion"
import { CERTIFICATIONS } from "../constants"

export const Certifications = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATIONS.map((certification, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-center text-2xl">
                {certification.title}
              </h3>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full"
              >
                <img
                  src={certification.image}
                  alt={index}
                  className="mb-6 rounded"
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
