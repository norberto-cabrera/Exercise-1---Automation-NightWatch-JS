module.exports = {
    'Linkedin MX': function (browser) {
      browser
        //1.-Go to linkedin.com?originalSubdomain=mx
        .url     ('https://www.linkedin.com/?originalSubdomain=mx')
        .waitForElementVisible('body', 1000)
        .pause(3000)

        //2.-Click on register. (The page has changed so I click on Join now)
        .click('body:nth-child(2) nav.nav:nth-child(1) > a.nav__button-tertiary')

        //3.-Verify this text is present: Get started - it's free. (Make the most of your professional life)
        .assert.containsText("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(9) header.main__header > h1.main__subtitle.main__subtitle--is-cold-join","Make the most of your professional life")
        
        //4.-Click on Join now. (Agree & Join)
        .waitForElementVisible('#join-form-submit', 1000)
        .click('#join-form-submit')
        .pause(3000)
        
        //5.-Verify Name required validation is displayed. (Email required validation)
        .assert.visible("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(9) div.alert div.wrapper > p.alert-content")
        
        //6.-Fill Name. (Fill email)
        .setValue("#email-address", 'mytest@gmail.com')
        .assert.containsText("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(9) div.alert div.wrapper > p.alert-content","Please enter your email address.")
        .pause(3000)
        
        //7.-Click on Join now. (Agree & Join)
        .click('#join-form-submit')
        
        //8.-Verify Last name required validation is displayed. (Password required validation)
        .assert.visible("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(9) div.alert div.wrapper > p.alert-content")
        .assert.containsText("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(9) div.alert div.wrapper > p.alert-content","Please enter your password.")
        
        //9.-Fill Last Name. (Fill password)
        .setValue("#password", 'P45w0rd')
        .pause(3000)
        
        //10.-Click on Join now. (Agree & Join)
        .click('#join-form-submit')
        .pause(3000)
        //10.-Click on Join now. (Continue)
        .click('#join-form-submit')
        
        //11.-Verify email required validation is displayed. (First Name required validation)
        .assert.visible("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(8) div.alert div.wrapper > p.alert-content")
        .assert.containsText("div.page.page--is-nux-design:nth-child(1) main.main form.join-form:nth-child(8) div.alert div.wrapper > p.alert-content","Please enter your first name.")
        .pause(3000)
        .end();
    }
  };