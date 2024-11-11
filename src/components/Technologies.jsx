import { BiLogoPostgresql } from "react-icons/bi"
import { DiAngularSimple, DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import {
  SiApachekafka,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNestjs,
} from "react-icons/si"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <a
            href="https://nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nest Js"
          >
            <SiNestjs className="text-7xl text-red-500 " />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Node Js"
          >
            <FaNodeJs className="text-7xl text-green-600" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <a
            href="https://angular.dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Angular"
          >
            <DiAngularSimple className="text-7xl text-red-700" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className="p-4"
        >
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PostgreSql"
          >
            <BiLogoPostgresql className="text-7xl text-sky-700" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MySql"
          >
            <SiMysql className="text-7xl text-blue-700" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <a
            href="https://redis.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Redis"
          >
            <DiRedis className="text-7xl text-red-700" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <a
            href="https://kafka.apache.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Afka"
          >
            <SiApachekafka className="text-7xl" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Docker"
          >
            <SiDocker className="text-7xl text-blue-700" />
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className="p-4"
        >
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mongo DB"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
