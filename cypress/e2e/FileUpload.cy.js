import 'cypress-file-upload'; 

describe('File Uploads', () => {

  it('Single File Uploads', () => {

    cy.visit('http://the-internet.herokuapp.com/upload');

    cy.get('#file-upload').attachFile('test1.pdf'); 
    
    cy.get('#file-submit').click();

    cy.wait(5000);

    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded');

  })

  it('Single File Uploads - Rename', () => {

    cy.visit('http://the-internet.herokuapp.com/upload');

    cy.get('#file-upload').attachFile({filepath:'test1.pdf', fileName:'myFile.pdf'}); 
    
    cy.get('#file-submit').click();

    cy.wait(5000);

    cy.get("div[class='example'] h3").should('have.text', 'File Uploaded');

  })

  it('Single File Uploads - Drag and Drop', () => {

    cy.visit('http://the-internet.herokuapp.com/upload');

    cy.get('#drag-drop-upload').attachFile("test1.pdf", {subjectType:'drag-n-drop'});

    cy.wait(5000);

    cy.get('#drag-drop-upload > .dz-preview > dz-details > dz-filename > span').contains('test1.pdf');

  })

  it('Multiple files Upload', () => {

    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');

    cy('#filesToUpload').attachFile(["tets1.pdf","test2.pdf"]);
    cy.wait(5000);

    cy.get(':nth-child(6) > strong').should('contain', 'Files You Selected:');

  })

  it('File Upload - Shadow Down', () => {

    cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');

    cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("test1.pdf");

    cy.waut(5000);

    cy.get('.smart-item-name', {includeShadowDom:true}).contains('test1.pdf');

  })

})