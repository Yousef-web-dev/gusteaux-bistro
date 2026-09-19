// "use client";

// import { motion } from "framer-motion";

// export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
//   const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 14 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-80px" }}
//       transition={{ duration: 0.5 }}
//       className={`flex flex-col gap-3 mb-10 ${alignment}`}
//     >
//       {eyebrow && (
//         <span className="text-sm text-navy-500 dark:text-navy-400 font-medium">
//           {eyebrow}
//         </span>
//       )}
//       <h2 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50 text-balance">
//         {title}
//       </h2>
//       {subtitle && (
//         <p className="max-w-2xl text-navy-500/80 dark:text-navy-100/70 text-base leading-relaxed">
//           {subtitle}
//         </p>
//       )}
//     </motion.div>
//   );
// }

"use client"

 import { motion } from "framer-motion";
const SectionHeading = ({eyebrow,title,subtitle,align = "center"}) => {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center"  
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 mb-10 ${alignment}`}
    >
      {eyebrow && (
        <span className="text-sm text-navy-500 dark:text-navy-400 font-medium">
          {eyebrow}
        </span>
      )}      

      <h2 className="font-display text-3xl sm:text-4xl text-navy-700 dark:text-navy-50 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-navy-500/50 dark:text-navy-100/70 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading
