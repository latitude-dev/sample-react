import NativeComponents from '@/examples/NativeComponents'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/native')({
  component: NativeComponents
})
