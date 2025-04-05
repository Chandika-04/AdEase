import OpenAI from 'openai'

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function generateImage(prompt: string) {
  const res = await openai.images.generate({
    prompt,
    n: 1,
    size: '512x512'
  })
  return res.data[0].url
}
