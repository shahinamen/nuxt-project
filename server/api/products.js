// server/api/products.js

import { readFileSync } from 'fs'
import { join } from 'path'

export default defineEventHandler(() => {
  const filePath = join(process.cwd(), 'server/api/data/products.json')
  const fileContent = readFileSync(filePath, 'utf-8')
  const products = JSON.parse(fileContent)
  return products
})