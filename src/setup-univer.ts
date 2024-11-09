import '@univerjs/design/lib/index.css'
import '@univerjs/ui/lib/index.css'
import '@univerjs/sheets-ui/lib/index.css'
import '@univerjs/sheets-formula-ui/lib/index.css'
import '@univerjs/sheets-numfmt-ui/lib/index.css'
import '@univerjs/sheets-conditional-formatting-ui/lib/index.css'

import '@univerjs/thread-comment-ui/lib/index.css'
import '@univerjs/sheets-crosshair-highlight/lib/index.css'
import '@univerjs/find-replace/lib/index.css'
import '@univerjs/sheets-data-validation-ui/lib/index.css'

import { LocaleType, Univer, UniverInstanceType } from '@univerjs/core'
import { defaultTheme } from '@univerjs/design'
import { UniverDocsPlugin } from '@univerjs/docs'
import { UniverDocsUIPlugin } from '@univerjs/docs-ui'
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula'
import { UniverRenderEnginePlugin } from '@univerjs/engine-render'
import { UniverSheetsPlugin } from '@univerjs/sheets'
import { UniverSheetsFormulaPlugin } from '@univerjs/sheets-formula'
import { UniverSheetsFormulaUIPlugin } from '@univerjs/sheets-formula-ui'
import { UniverSheetsNumfmtPlugin } from '@univerjs/sheets-numfmt'
import { UniverSheetsNumfmtUIPlugin } from '@univerjs/sheets-numfmt-ui'
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui'
import { UniverUIPlugin } from '@univerjs/ui'
import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor'
import { FUniver } from '@univerjs/facade'
import { UniverSheetsPivotTablePlugin } from '@univerjs-pro/sheets-pivot'
import { UniverSheetsPivotTableUIPlugin } from '@univerjs-pro/sheets-pivot-ui'
import { UniverSheetsCrosshairHighlightPlugin } from '@univerjs/sheets-crosshair-highlight'
import { UniverFindReplacePlugin } from '@univerjs/find-replace'
import { UniverSheetsFindReplacePlugin } from '@univerjs/sheets-find-replace'
import { locales } from './locale'

// read more detail: https://univer.ai/guides/sheet/getting-started/univer-plugins
// import { enUS } from 'univer:locales'
import { setupComment } from './setups/setupComment'

export function setupUniver() {
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.EN_US,
    locales,
  })

  univer.registerPlugin(UniverRenderEnginePlugin)
  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
  })
  univer.registerPlugin(UniverUIPlugin, {
    container: 'univer',
    header: true,
    footer: true,
  })
  univer.registerPlugin(UniverDocsUIPlugin)
  univer.registerPlugin(UniverSheetsPlugin)
  univer.registerPlugin(UniverSheetsUIPlugin)

  // find-replace
  univer.registerPlugin(UniverFindReplacePlugin)
  univer.registerPlugin(UniverSheetsFindReplacePlugin)

  univer.registerPlugin(UniverSheetsNumfmtPlugin)
  univer.registerPlugin(UniverSheetsNumfmtUIPlugin)
  univer.registerPlugin(UniverFormulaEnginePlugin)
  univer.registerPlugin(UniverSheetsFormulaPlugin)
  univer.registerPlugin(UniverSheetsFormulaUIPlugin)
  univer.registerPlugin(UniverSheetsZenEditorPlugin)

  univer.createUnit(UniverInstanceType.UNIVER_SHEET, {})

  univer.registerPlugin(UniverSheetsPivotTablePlugin)
  univer.registerPlugin(UniverSheetsPivotTableUIPlugin)
  univer.registerPlugin(UniverSheetsCrosshairHighlightPlugin)
  // In version v0.1.15, please register the comment plugin after calling univer.createUnit.
  setupComment(univer)

  return FUniver.newAPI(univer)
}
