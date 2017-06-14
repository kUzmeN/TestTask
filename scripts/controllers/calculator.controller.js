testTaskApp.controller('CalculatorController', function (productService) {
    this.products = [];
    this.selectedProduct = null;
    this.fullPriceForCube = 0.0;
    this.fullPrice =0.0;

    
    this.loadProducts = function () {
        productService.getProducts()
            .then(response => {
                this.products = response.data;

                if(response.data.length>0) {
                    this.selectedProduct = response.data[0];
                }

                this.calculatePrices();
            });
    }


    this.setSelectedProduct = function (name) {
        this.products.forEach( (product, i, products) =>  {
            if(product.name == name){
                this.selectedProduct = product;
                return;
            }
        });

        this.calculatePrices();
    }

    
    this.calculatePriceForCube = function () {
        this.fullPriceForCube = Math.round(this.fullPrice / this.selectedProduct.m3*100)/100;
    }

    
    this.calculateFullPrice = function () {
        this.fullPrice = this.selectedProduct.m3 * this.selectedProduct.push_price
            * (100 - this.selectedProduct.deffect_percent) / 100
            + this.selectedProduct.m3 * this.selectedProduct.deffect_cost
            * this.selectedProduct.deffect_percent / 100
            + (this.selectedProduct.logistic);
    }


    this.calculatePrices = function () {
        this.calculateFullPrice();
        this.calculatePriceForCube();
    }
    
});
