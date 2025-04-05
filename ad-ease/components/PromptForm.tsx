'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function PromptForm({ onGenerate }: { onGenerate: (prompt: string) => void }) {
  const [prompt, setPrompt] = useState('')

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <Textarea
        placeholder="Describe your ad idea..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="min-h-[120px]"
      />
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button onClick={() => onGenerate(prompt)} className="w-full">
          Generate
        </Button>
      </motion.div>
    </motion.div>
  )
}
