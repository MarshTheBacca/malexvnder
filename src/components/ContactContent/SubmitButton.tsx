export function SubmitButton({ result }: Readonly<{ result: string | null }>) {
  return (
    <button
      type={'submit'}
      className={
        'group relative w-full overflow-hidden border border-black/30 py-6 transition-all hover:border-black'
      }
    >
      <span
        className={
          'relative z-10 text-xs font-black tracking-[0.8em] uppercase transition-all group-hover:tracking-[1em] group-hover:text-white'
        }
      >
        {result === 'Sending...' ? 'Processing' : 'Send Inquiry'}
      </span>
      <div
        className={
          'absolute inset-0 translate-y-full bg-black transition-transform duration-500 group-hover:translate-y-0'
        }
      />
    </button>
  )
}
