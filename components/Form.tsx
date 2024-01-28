'use client'

import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'
import { createCompletion } from '@/app/actions'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export default function Form() {
  async function action(formData: FormData) {
    const prompt = formData.get('prompt')
    if (!prompt) {
      toast.error('Prompt is required.')
      return
    }

    const error = await createCompletion(prompt as string)
    if (error) {
      toast.error(error.error)
    }
  }

  return (
    <section className='mx-auto max-w-lg'>
      <Card className='border-0 shadow-none'>
        <CardHeader className='text-center'>
          <CardTitle>Next AI Blogger</CardTitle>
          <CardDescription>Generate a blog post about anything</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className='mt-3'>
            <Input
              name='prompt'
              placeholder='What should I write about?'
              className='rounded-lg'
            />
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <>
      <Button
        size='sm'
        type='submit'
        className={cn('mt-3 w-full rounded-lg', pending && 'animate-pulse')}
      >
        {pending ? 'Working on it...' : 'Submit'}
      </Button>

      <Button
        size='sm'
        type='button'
        variant='secondary'
        className='mt-3 w-full rounded-lg'
      >
        Sign in to start
      </Button>
    </>
  )
}
