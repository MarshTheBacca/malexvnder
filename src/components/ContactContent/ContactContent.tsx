import { useState } from 'react'
import { PageLayout } from '../NavBar/PageLayout/PageLayout'
import { ContactForm } from './ContactForm'

export function ContactContent(): React.ReactElement<typeof PageLayout> {
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  return (
    <PageLayout>
      <section
        className={
          'flex h-full w-full flex-col items-center overflow-y-auto px-10'
        }
      >
        <header className={'mb-10 font-normal tracking-tighter uppercase'}>
          <h1 className={'font-bodoni text-6xl md:text-7xl'}>Contact</h1>
          <p className={'text-xs font-medium tracking-[0.3em] opacity-60'}>
            Reach out for collaborations or bespoke orders
          </p>
        </header>
        {isSuccess ? (
          <div
            className={
              'animate-in fade-in slide-in-from-bottom-4 border-t border-black/10 py-16'
            }
          >
            <p className={'mb-8 text-2xl italic'}>Sent successfully.</p>
            <button
              onClick={() => setIsSuccess(false)}
              className={
                'border border-black px-6 py-3 text-[1rem] font-bold tracking-[0.5em] uppercase transition-all hover:bg-black hover:text-white'
              }
            >
              Return to Form
            </button>
          </div>
        ) : (
          <ContactForm isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
        )}
      </section>
    </PageLayout>
  )
}
