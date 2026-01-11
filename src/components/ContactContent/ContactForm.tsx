import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import useWeb3Forms from '@web3forms/react'
import { SubmitButton } from './SubmitButton'

export type ContactFormProps = {
  isSuccess: boolean
  setIsSuccess: Dispatch<SetStateAction<boolean>>
}

export function ContactForm({
  isSuccess,
  setIsSuccess,
}: Readonly<ContactFormProps>): React.ReactElement<HTMLFormElement> {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [result, setResult] = useState<string | null>(null)
  const { submit: onSubmit } = useWeb3Forms({
    access_key: 'bf7d1b87-a092-4d1d-a374-e28ffc668160',
    settings: {
      from_name: 'malexvnder contact',
      subject: 'New contact message from malexvnder.com',
    },
    onSuccess: (message: string): void => {
      setIsSuccess(true)
      setResult(message)
      reset()
    },
    onError: (message: string): void => {
      setIsSuccess(false)
      setResult(message)
    },
  })

  const inputClasses: string = `w-full bg-transparent border-b py-3 outline-none transition-all duration-300
  placeholder:text-black/40 text-black font-normal tracking-widest focus:border-black focus:pl-2`
  const headerClass: string =
    'text-[1rem] font-bold tracking-[0.4em] uppercase opacity-40 transition-opacity group-focus-within:opacity-100'
  const inputClass: string = `${inputClasses} ${errors.name ? 'border-red-600' : 'border-black/30'}`
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'w-full space-y-10'}>
      <div className={'group flex flex-col'}>
        <label htmlFor={'name'} className={headerClass}>
          Full Name
        </label>
        <input
          id={'name'}
          type={'text'}
          placeholder={'NAME'}
          {...register('name', { required: true })}
          className={inputClass}
        />
      </div>
      <div className={'group flex flex-col'}>
        <label htmlFor={'email'} className={headerClass}>
          Email Address
        </label>
        <input
          id={'email'}
          type={'email'}
          placeholder={'EMAIL'}
          {...register('email', { required: true })}
          className={inputClass}
        />
      </div>
      <div className={'group flex flex-col'}>
        <label htmlFor={'message'} className={headerClass}>
          Your Message
        </label>
        <textarea
          id={'message'}
          rows={4}
          {...register('message', { required: true })}
          className={`${inputClass} resize-none`}
        />
      </div>
      <SubmitButton result={result} />
      {result && !isSuccess && (
        <p
          className={
            'text-center text-[1rem] font-bold tracking-widest text-red-600 uppercase'
          }
        >
          {result}
        </p>
      )}
    </form>
  )
}
