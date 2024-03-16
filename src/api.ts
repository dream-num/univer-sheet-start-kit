import type { FUniver } from '@univerjs/facade'

export function setupSetValue($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'set A1 Value'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const value = 'Hello, World!'

    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')
    const activeSheet = activeWorkbook.getActiveSheet()
    if (!activeSheet)
      throw new Error('activeSheet is not defined')

    const range = activeSheet.getRange(0, 0)
    if (!range)
      throw new Error('range is not defined')

    /**
     * @see https://univer.ai/api/facade/classes/FRange.html#setValue
     */
    range.setValue(value)
  })
}

export function setupSetValues($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'set A1:B2 Values'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const values = [
      ['Hello', 'World!'],
      ['Hello', 'Univer!'],
    ]

    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')
    const activeSheet = activeWorkbook.getActiveSheet()
    if (!activeSheet)
      throw new Error('activeSheet is not defined')

    const range = activeSheet.getRange(0, 0, values.length, values[0].length)
    if (!range)
      throw new Error('range is not defined')

    /**
     * @see https://univer.ai/api/facade/classes/FRange.html#setValues
     */
    range.setValues(values)
  })
}

export function setupGetValue($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'get A1 Value'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const values = [
      ['Hello', 'World!'],
      ['Hello', 'Univer!'],
      ['Hello', 'Sheets!'],
    ]

    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')
    const activeSheet = activeWorkbook.getActiveSheet()
    if (!activeSheet)
      throw new Error('activeSheet is not defined')

    const range = activeSheet.getRange(0, 0, values.length, values[0].length)
    if (!range)
      throw new Error('range is not defined')

    /**
     * @see https://univer.ai/api/facade/classes/FRange.html#getValue
     */
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(range.getValue(), null, 2))
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(range.getValue(), null, 2))
  })
}

export function setupValues($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'get A1:B2 Values'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const values = [
      ['Hello', 'World!'],
      ['Hello', 'Univer!'],
      ['Hello', 'Sheets!'],
    ]

    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')
    const activeSheet = activeWorkbook.getActiveSheet()
    if (!activeSheet)
      throw new Error('activeSheet is not defined')

    const range = activeSheet.getRange(0, 0, values.length, values[0].length)
    if (!range)
      throw new Error('range is not defined')

    // TODO: add facade API
    const data: (string | undefined)[][] = []
    range.forEach((row, col, cell) => {
      data[row] = data[row] || []
      data[row][col] = cell.v?.toString()
    })

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data, null, 2))
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(data, null, 2))
  })
}

export function setupGetWorkbookData($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'get Workbook Data'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(activeWorkbook.getSnapshot(), null, 2))
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(activeWorkbook.getSnapshot(), null, 2))
  })
}

export function setupGetSheetData($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'get Sheet1 Data'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')

    const snapshot = activeWorkbook.getSnapshot()
    const sheet1 = Object.values(snapshot.sheets).find((sheet) => {
      return sheet.name === 'Sheet1'
    })

    if (!sheet1)
      throw new Error('sheet1 is not defined')

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(sheet1, null, 2))
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(sheet1, null, 2))
  })
}

export function setupCreateSheet($toolbar: HTMLElement, univerAPI: FUniver) {
  const $button = document.createElement('a')
  $button.textContent = 'create Sheet2'
  $toolbar.appendChild($button)

  $button.addEventListener('click', () => {
    const activeWorkbook = univerAPI.getActiveWorkbook()
    if (!activeWorkbook)
      throw new Error('activeWorkbook is not defined')

    const sheet = activeWorkbook.create('Sheet2', 10, 10)

    if (!sheet)
      throw new Error('sheet is not defined')

    // eslint-disable-next-line no-alert
    alert('Sheet created')
  })
}
