import './style.css'

import { setupUniver } from './setup-univer'
import { setupToolbar } from './setup-toolbar'

function main() {
  const univerAPI = setupUniver()
  window.univerAPI = univerAPI
  setupToolbar(univerAPI)
}

main()
