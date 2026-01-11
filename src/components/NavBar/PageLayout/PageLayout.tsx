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
      className={'flex h-full w-full grow flex-col items-center'}
    >
      {children}
    </motion.div>
  )
}
