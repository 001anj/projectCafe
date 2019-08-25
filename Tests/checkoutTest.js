import { Selector } from 'testcafe';
import { ClientFunction, t } from 'testcafe';
import Page from './page-model';

const page = new Page();

fixture('E2E test case for checkout process')
.page('https://www.bergfreunde.eu');

test('Should check the checkout process for random selected item', async t => {

// Selecting the search field and searching for specific brand "Lundhags"
    await t.click(page.search); 
    await t.typeText(page.searchBrand, "Lundhags");
    await t.click(page.searchButton);
// check whether entered brand is actually searched or not
    await t.expect(await Selector('h1').innerText).eql('LUNDHAGS SHOES, CLOTHING AND BACKPACKS');
    
// Select the required size in filter
    await t.click(page.selectSizeOption);
    await t.click(page.selectSize);
    await t.click(page.submitSize);
// check whether page displays the product from selected size
    await t.expect(Selector('h1').innerText).eql('LUNDHAGS IN SIZE XS ');

// Select the required color in filter
    await t.click(page.selectColorOption);
    await t.click(page.selectColor);
    await t.click(page.submitColor);
// check whether color option is selected or not
    await t.expect('[class="selected"][data-filter-value="red"]').ok();

// Put the required maximum weight in filter
    await t.click(page.selectWeightOption);
    await t.typeText(page.weightInput, "400 gr", {replace: true});
    await t.click(page.submitWeight);
  
// Put the required maximum price in filter
    await t.click(page.selectPriceOption);
    await t.typeText(page.priceInput, "200 €", {replace: true});
    await t.click(page.submitPrice);

// Selecting the item after confirming all the required filters    
    await t.click(page.selectItem);

// Check whether detail page of selected item is displayed or not
    await t.expect('[id="details"]').ok();

// Check atleast one review is visible for the selected item
    await t.expect(Selector('[itemprop="review"]').visible).ok();

//Confirming the quantity of item required and adding it to cart
    await t.typeText(page.quantityInput, "2", {replace: true});
    await t.click(page.addToCart);
// Check whether popup for information of item added to cart is displayed
    await t.expect(Selector('[class="center-text-popup highlight-1"]').textContent).eql('You have added the following product to the cart:');

// Confirming the details of purchased item and proceeding to cart
    await t.click(page.goToCart);

// Trying the redeem code 
    await t.typeText(page.voucherInput, "NotAvailable");
    await t.click(page.submitVoucher);

// Check whether error is displayed when wrong voucher code is entered
    await t.expect('[class="voucher-errors clearfix"]').ok('true');

// Closing the error window
    await t.click(page.closeErrorPopup);

// Confirming the purchase and proceed towards checkout
    await t.click(page.goToCheckout);

// Check whether User is redirected to login page or create a new account page before moving to payment section
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('https://www.bergfreunde.eu/customer/');

// Check whether login form is visible in redirected page    
    await t.expect(Selector('[class="small-12 columns content"]').visible).ok();

// check whether create an account button is visible in redirected page
    await t.expect(Selector('[class="a-button a-button--green right a-button--large user-button"][data-codecept="registerButton"]').visible).ok();

    });
    
