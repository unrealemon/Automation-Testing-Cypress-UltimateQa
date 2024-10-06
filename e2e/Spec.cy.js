describe('template spec', () => {
  it('passes', () => {

    //declaring variable for wait period
     var x = 1000;

    // go to ultimate qa url
    cy.visit('https://ultimateqa.com/automation');

    cy.get('.wp-image-218123') // Replace 'img#logo' with the actual selector
     .should('exist') // Ensure the logo element exists
     .then((logoElement) => {
      const logoSource = logoElement.attr('https://ultimateqa.com/wp-content/uploads/2023/11/logo.svg');
        expect(logoSource).to.not.be.null; // Check if the source is not null
  })

    // wait for 2 seconds
    cy.wait(x);
    //check is the text exists
    cy.contains('Automation Practice').should('exist');
    cy.wait(5000);
   
    cy.contains('Use your skills to learn how to automate different scenarios').should('exist');
    cy.wait(5000);

    // locate "Big page with many elements" and click
  
    cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click();
    cy.wait(x);
    // locate the button & click
    cy.get('.et_pb_button_0_wrapper > .et_pb_button').click();
    cy.wait(x);

    // scroll down by 500 pixels
    cy.scrollTo(0, 500);
    cy.wait(x);

    // locate the social media button & click
    //cy.get('.et_pb_social_media_follow_network_0 > .icon').click();
    //cy.wait(5000);

    // go back
    //cy.go(-1);
    //cy.wait(1000);

    //scroll down by 1000 pixels
    cy.scrollTo(0, 1000);
    cy.wait(x);
    //Select "hide" from the left section of "ON THIS PAGE"
    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_header > .lwptoc_toggle > .lwptoc_toggle_label').click();
    cy.wait(x);
    // scroll down to to make the section properly visible
    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_header > .lwptoc_toggle > .lwptoc_toggle_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(1) > a > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(2) > a > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(3) > a > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(4) > [href="#Section_of_Random_Stuff"] > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(4) > :nth-child(2) > :nth-child(1) > [href="#Login"] > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(4) > :nth-child(2) > :nth-child(1) > .lwptoc_itemWrap > .lwptoc_item > a > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(4) > :nth-child(2) > :nth-child(2) > a > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_items > :nth-child(1) > :nth-child(5) > a > .lwptoc_item_label').click();
    cy.wait(x);

    cy.get('#Section_of_Random_Stuff').scrollIntoView();
    cy.wait(x);

    cy.get('#et_pb_contact_name_0').type('Md. Emon ALi', {delay:100});
    cy.wait(x);

    cy.get('#et_pb_contact_email_0').type('emonali.w@gmail.com', {delay:100});
    cy.wait(x);




  })

})