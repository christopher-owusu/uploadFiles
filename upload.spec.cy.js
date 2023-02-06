/// <reference types="cypress"/>

import 'cypress-file-upload'

describe('template spec', () => {
  it('Single File Uploads', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile('catman.png')
    cy.get('#file-submit').click()
    cy.wait(5000)

    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
  })

  it.only('Single File Uploads and specify file name', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').attachFile({filePath:'catman.png', fileName: 'bunny.png'})
    cy.get('#file-submit').click()
    cy.wait(5000)

    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!')
  })

  it.only('Single File Uploads using drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#drag-drop-upload').attachFile('catman.png', {subjectType: 'drag-n-drop'})
    cy.wait(5000)

    cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('catman.png')
  })

  // it.only('Multiple Files Upload', () => {
  //   cy.visit('https://the-internet.herokuapp.com/upload')
  //   cy.get('#drag-drop-upload').attachFile(['catman.png', 'simpsons.webp'])
  //   cy.wait(5000)

  //   cy.get("div[id='drag-drop-upload'] div:nth-child(2) div:nth-child(1) div:nth-child(1) span:nth-child(1)").contains('catman.png')
  // })
})