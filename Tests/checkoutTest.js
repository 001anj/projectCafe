import { Selector } from 'testcafe';
import { ClientFunction, t } from 'testcafe';

fixture('Test case to check search functionality of a product')
.page('https://www.bergfreunde.eu');

test('Should check whether searched brand is actually found or not', async t => {
    // closing the welcome alert
    await t.click('[class="greeting-cancel"][title="Ich komme gar nicht aus Deutschland"]');

    // Selecting the search field and searching for specific brand "Lundhags"
    await t.click('[data-codecept="searchGo"][title="Start your search!"]'); 
	await t.typeText('input[itemprop="query-input"]', "Lundhags");
	await t.click('[class="suggestTextQueryTyped"][data-codecept="suggestHighlightedBrand"]');
	// check whether entered brand is actually searched or not
	await t.expect(await Selector('h1').innerText).eql('LUNDHAGS SHOES, CLOTHING AND BACKPACKS');


    await t.click('[class="arrow right"][data-codecept="BaseSize-icon"]');
    await t.click('[class="unselected"][data-filter-value="xs"]');
    await t.click('button[class="a-button a-button--green left button-box__filter"][type="submit"]');
    // check 
    await t.expect(await Selector('h1').innerText).eql('LUNDHAGS IN SIZE XS ');

    await t.click('[class="arrow right"][data-codecept="BaseColor-icon"]');
    await t.click('[class="unselected"][data-filter-value="red"]');
    await t.click('button[class="a-button a-button--green left button-box__filter"][type="submit"]');

    await t.click('[class="arrow right"][data-codecept="Weight-icon"]');
    await t.typeText('input[name="maxVal"]', "420 gr", {replace: true});
    await t.click('button[class="a-button a-button--green left button-box__filter"][type="submit"]');

    await t.click('[class="arrow right"][data-codecept="Price-icon"]');
    await t.typeText('input[name="maxVal"]', "100 €", {replace: true});
    await t.click('button[class="a-button a-button--green left button-box__filter"][type="submit"]');

    await t.click(Selector('.product-link').withText('Skirt'))
    await t.expect('[id="details"]').ok();

    await t.typeText('input[name="am"]', "2", {replace: true});
    await t.click(Selector('[data-codecept="toBasket"][type="submit"]'));
    await t.expect(Selector('[class="center-text-popup highlight-1"]').textContent).eql('You have added the following product to the cart:');

    await t.click(Selector('[data-codecept="toBasketPopup"][type="submit"]'));

    await t.typeText('input[name="voucherNr"]', "NotAvailable");
    await t.click(Selector('[data-codecept="submitVoucher"][type="submit"]'));
    await t.expect('[class="voucher-errors clearfix"]').ok('true');

    await t.click('[class="close close-reveal-modal"]');
    await t.click('button[class="a-button a-button--green a-button--large right"][type="submit"]');
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains('https://www.bergfreunde.eu/customer/');

    });
    