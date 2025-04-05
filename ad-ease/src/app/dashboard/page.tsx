'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { PromptForm } from '@/components/PromptForm'
import { ImageGrid } from '@/components/ImageGrid'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [images, setImages] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push('/')
    })
  }, [])

  async function handleGenerate(prompt: string) {
    const res = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    })
    const { url } = await res.json()
    setImages((prev) => [url, ...prev])
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Generate AI Ad Images</h2>
      <PromptForm onGenerate={handleGenerate} />
      <ImageGrid images={images} />
    </main>
  )
}
