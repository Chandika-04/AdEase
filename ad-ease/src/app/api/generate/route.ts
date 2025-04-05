import { NextRequest, NextResponse } from 'next/server'
import { generateImage } from 'lib/openai'

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  const url = await generateImage(prompt)
  return NextResponse.json({ url })
}
