import { Selector } from 'testcafe';

export default class Page {
    constructor () {
  
    	
    	this.search = Selector('[data-codecept="searchGo"][title="Start your search!"]');
    	this.searchBrand = Selector('input[itemprop="query-input"]');
    	this.searchButton = Selector('[class="suggestTextQueryTyped"][data-codecept="suggestHighlightedBrand"]');

        this.selectRatingOption = Selector('[class="arrow right"][data-codecept="Rating-icon"]');
        this.selectRating = Selector('[class="clearfix unselected"][data-filter-value="5"]');
        this.submitRating = Selector('button[class="a-button a-button--green left button-box__filter"][type="submit"]');
        this.successfulRatingSelection = Selector('[class="clearfix selected"][data-filter-value="5"]');

        this.selectWeightOption = Selector('[class="arrow right"][data-codecept="Weight-icon"]');
        this.weightInput = Selector('input[name="maxVal"]');
        this.submitWeight = Selector('button[class="a-button a-button--green left button-box__filter"][type="submit"]');
       
        this.selectPriceOption = Selector('[class="arrow right"][data-codecept="Price-icon"]');
        this.priceInput = Selector('input[name="maxVal"]');
        this.submitPrice = Selector('button[class="a-button a-button--green left button-box__filter"][type="submit"]');
        
        this.selectSizeOption = Selector('[class="arrow right"][data-codecept="BaseSize-icon"]');
        this.selectSize = Selector('[class="unselected"][data-filter-value="xs"]');
        this.submitSize = Selector('button[class="a-button a-button--green left button-box__filter"][type="submit"]');
        
        this.selectColorOption = Selector('[class="arrow right"][data-codecept="BaseColor-icon"]');
        this.selectColor = Selector('[class="unselected"][data-filter-value="red"]');
        this.submitColor = Selector('button[class="a-button a-button--green left button-box__filter"][type="submit"]');
        this.successfulColorSelection = Selector('[class="selected"][data-filter-value="red"]');

        this.selectItem = Selector('.product-link').withText('Tiven Skirt - Skirt');

        this.productDetailPage = Selector('[id="details"]');

        this.quantityInput = Selector('input[name="am"]'); 
        this.addToCart = Selector('[data-codecept="toBasket"][type="submit"]');
        
        this.goToCart = Selector('[data-codecept="toBasketPopup"][type="submit"]');

        this.voucherInput = Selector('input[name="voucherNr"]');
        this.submitVoucher = Selector('[data-codecept="submitVoucher"][type="submit"]');

        this.errorPopup = Selector('[class="voucher-errors clearfix"]');

        this.closeErrorPopup = Selector('[class="close close-reveal-modal"]');

        this.goToCheckout = Selector('button[class="a-button a-button--green a-button--large right"][type="submit"]');  
    }



}
