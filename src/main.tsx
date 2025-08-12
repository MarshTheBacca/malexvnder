import { RootComponent } from '@/components/RootComponent/RootComponent'
import { createRoot } from 'react-dom/client'

export function main(): void {
  const rootElement: HTMLElement | null = document.getElementById('root')
  if (!rootElement) {
    throw new Error('Root element is null')
  }
  createRoot(rootElement).render(<RootComponent />)
}

main()
