'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) router.push('/dashboard')
    })
  }, [])

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to AdEase</h1>
      <button
        className="px-4 py-2 bg-black text-white rounded"
        onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
      >
        Sign in with Google
      </button>
    </main>
  )
}
