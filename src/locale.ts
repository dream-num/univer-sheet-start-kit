import { LocaleType, Tools } from '@univerjs/core'
import UniverDesignEnUS from '@univerjs/design/locale/en-US'
import UniverDocsUIEnUS from '@univerjs/docs-ui/locale/en-US'
import UniverSheetsEnUS from '@univerjs/sheets/locale/en-US'
import UniverSheetsUIEnUS from '@univerjs/sheets-ui/locale/en-US'
import UniverUiEnUS from '@univerjs/ui/locale/en-US'
import UniverSheetsConditionalFormattingUiEnUS from '@univerjs/sheets-conditional-formatting-ui/locale/en-US'
import UniverSheetsNumfmtPluginUiEnUS from '@univerjs/sheets-numfmt-ui/locale/en-US'

import UniverSheetsThreadCommentUiEnUs from '@univerjs/sheets-thread-comment-ui/locale/en-US'
import UniverThreadCommentUiEnUs from '@univerjs/thread-comment-ui/locale/en-US'
import FindReplaceZhCN from '@univerjs/find-replace/locale/zh-CN'
import SheetsFindReplaceZhCN from '@univerjs/sheets-find-replace/locale/zh-CN'
import UniverSheetsFormulaUIPluginEnUs from '@univerjs/sheets-formula-ui/locale/en-US'
import UniverSheetsCrosshairHighlightPluginEnUs from '@univerjs/sheets-crosshair-highlight/locale/en-US'

// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import UniverSheetsPivotUiEnUs from '@univerjs-pro/sheets-pivot-ui/locale/en-US'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import UniverSheetsPivotEnUs from '@univerjs-pro/sheets-pivot/locale/en-US'

export const locales = {
  [LocaleType.EN_US]: Tools.deepMerge(
    UniverSheetsEnUS,
    UniverDocsUIEnUS,
    UniverUiEnUS,
    UniverDesignEnUS,
    UniverSheetsFormulaUIPluginEnUs,
    UniverSheetsConditionalFormattingUiEnUS,
    UniverSheetsUIEnUS,
    UniverSheetsNumfmtPluginUiEnUS,
    UniverSheetsThreadCommentUiEnUs,
    UniverThreadCommentUiEnUs,
    FindReplaceZhCN,
    SheetsFindReplaceZhCN,
    UniverSheetsCrosshairHighlightPluginEnUs,
    UniverSheetsPivotUiEnUs,
    UniverSheetsPivotEnUs,
  ),
}
