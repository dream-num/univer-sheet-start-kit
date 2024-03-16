import type { FUniver } from '@univerjs/facade'
import { setupCreateSheet, setupGetSheetData, setupGetValue, setupGetWorkbookData, setupSetValue, setupSetValues } from './api'

export function setupToolbar(univerAPI: FUniver) {
  const $toolbar = document.getElementById('toolbar')!

  setupSetValue($toolbar, univerAPI)
  setupSetValues($toolbar, univerAPI)
  setupGetValue($toolbar, univerAPI)
  setupGetValue($toolbar, univerAPI)
  setupGetWorkbookData($toolbar, univerAPI)
  setupGetSheetData($toolbar, univerAPI)
  setupCreateSheet($toolbar, univerAPI)
}
