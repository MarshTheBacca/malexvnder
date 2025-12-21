import { motion } from 'framer-motion'
export function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={'flex-grow flex-col items-center bg-gray-800 font-bold'}
    >
      {children}
    </motion.div>
  )
}
