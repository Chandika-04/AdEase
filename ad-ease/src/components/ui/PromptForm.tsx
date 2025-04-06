import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function PromptForm({ onGenerate }: { onGenerate: (prompt: string) => void }) {
  const [part1, setPart1] = useState('')
  const [part2, setPart2] = useState('')
  const [part3, setPart3] = useState('')
  const [part4, setPart4] = useState('') 

  const handleGenerate = () => {
    if (!part1 || !part2 || !part3 || !part4) {
      alert('Please fill in all fields')
      return
    }
    const fullPrompt = `create an ad with company name:${part1}, Product description:${part2}, image to generate:${part3}, slogan:${part4}`
    onGenerate(fullPrompt)
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <Textarea
        placeholder="Company name, product, or service..."
        value={part1}
        onChange={(e) => setPart1(e.target.value)}
        className="min-h-[120px]"
      />
      <Textarea
        placeholder="Describe the product or service..."
        value={part2}
        onChange={(e) => setPart2(e.target.value)}
        className="min-h-[120px]"
      />
      <Textarea
        placeholder="Image you want to generate..."
        value={part3}
        onChange={(e) => setPart3(e.target.value)}
        className="min-h-[120px]"
      />
      <Textarea
        placeholder="Slogan"
        value={part4}
        onChange={(e) => setPart4(e.target.value)}
        className="min-h-[120px]"
      />
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button onClick={handleGenerate} className="w-full">
          Generate
        </Button>
      </motion.div>
    </motion.div>
  )
}