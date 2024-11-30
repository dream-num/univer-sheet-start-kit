import { setupToolbar } from './setup-toolbar'
import { setupUniver } from './setup-univer'
import './style.css'

function main() {
  const univerAPI = setupUniver()
  window.univerAPI = univerAPI
  setupToolbar(univerAPI)
}

main()
