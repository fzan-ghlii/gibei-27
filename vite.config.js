import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import handler from './api/roster.js'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'api-roster-dev-server',
      configureServer(server) {
        server.middlewares.use('/api/roster', (req, res) => {
          res.status = (code) => {
            res.statusCode = code
            return res
          }
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
          }
          handler(req, res)
        })
      },
    },
  ],
})
