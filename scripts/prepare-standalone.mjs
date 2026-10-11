import { cp, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

const projectDirectory = process.cwd()
const standaloneDirectory = join(projectDirectory, '.next', 'standalone')

await mkdir(join(standaloneDirectory, '.next', 'static'), { recursive: true })
await cp(join(projectDirectory, '.next', 'static'), join(standaloneDirectory, '.next', 'static'), {
  recursive: true,
  force: true,
})
await cp(join(projectDirectory, 'public'), join(standaloneDirectory, 'public'), {
  recursive: true,
  force: true,
})