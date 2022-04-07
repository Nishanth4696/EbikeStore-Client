import React, { Component } from 'react'
import { detailProduct} from './data'
import { API_URL } from './global-constants'
import axios from 'axios';


   




    


  
const ProductContext = React.createContext()

class ProductProvider extends Component {


    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modelProduct: detailProduct,
        modelOpen: false,
        cartSubTotal: 0,
        cartTax:0,
        cartTotal:0,
        totalCount: 0,
        serviceForm: false,
        serviceFormComplete: false
    }

    componentDidMount() {
        this.setBikeProducts();
    }




    setBikeProducts = () => {
        
        axios.get(`${API_URL}/ebike`)
      .then(res => {
        const products = res.data;
        this.setState({products})
      })
     }
    
    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    } 

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index];
        product.inCart = true;
        product.count = product.count + 1;
        product.total = product.total + product.price;
        this.setState(() => {
            return {
                products: tempProducts, 
                cart: [...this.state.cart, product],
                totalCount: this.state.totalCount + product.count
            }
        }, () => 
        this.cartTotal()
        );
    }

    openModel = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modelProduct: product,
                modelOpen: true
            }
        })
    }
    closeModel = () => {
        this.setState(() => {
            return {
                modelOpen: false
            }
        })
    }

    openServiceForm = () => {
        this.setState(() => {
            return {serviceForm: true}
        })
    }

    closeServiceForm = () => {
        this.setState(() => {
            return {serviceForm: false, serviceFormComplete: false}
        })
    }

    submitServiceForm = () => {
        this.setState(() => {
            return {serviceFormComplete: true, serviceForm: false}
        })
    }

    increment = (id) => {
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count = product.count + 1;
        product.total = product.total + product.price;
        this.cartTotal();
        this.setState(() => {
            return {
                products: tempProducts, 
                totalCount: this.state.totalCount + 1
            }
        })
    }

    decrement = (id) => {
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        if (product.count > 1) {
            product.count = product.count - 1;
            product.total = product.total - product.price;
            this.cartTotal();
            this.setState(() => {
                return {
                    products: tempProducts, 
                    totalCount: this.state.totalCount - 1
                }
            })
        } else {
            this.removeItem(id);
            this.setState(() => {
                return {totalCount: this.state.totalCount - 1}
            })
        }
    }

    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.products];
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        let tempProductCount = product.count;
        let tempProductTotal = product.total;
        this.setState(() => {
            return {
                totalCount: this.state.totalCount - tempProductCount,
                cartSubTotal: this.state.cartSubTotal - tempProductTotal
            }
        })
        product.count = 0;
        product.inCart = false;
        product.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart], 
                products: [...tempProducts],
            }
        })
    }

    clearCart = () => {
        this.setState(() => {
            return {cart: [], totalCount: 0}
        }, () => {
            this.setBikeProducts();
        })
    }

    cartTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal = subTotal + item.total));
            const tempTax = subTotal * 0.125;
            const tax = tempTax.toFixed(2);
            const tempTotal = subTotal + tempTax;
            const total = tempTotal.toFixed(2);
            this.setState(() => {
                return {
                    cartSubTotal: subTotal,
                    cartTax: tax,
                    cartTotal: total
                }
            })
        }

    render() {
        return (
            <ProductContext.Provider 
                value={{ 
                    ...this.state, 
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModel: this.openModel,
                    closeModel: this.closeModel,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    cartTotal: this.state.cartTotal,
                    openServiceForm: this.openServiceForm,
                    closeServiceForm: this.closeServiceForm,
                    submitServiceForm: this.submitServiceForm,
                }}>

                {this.props.children}
            </ProductContext.Provider>             
            
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
