import styled from 'styled-components';


export const ButtonContainer = styled.button`
background: transparent;
color: var(--mainWhite);
text-transform: capitalize;
color: ${(props) => 
    props.backToProducts ? 'var(--submitGreen)' : 'var(--mainWhite)'};
border: ${ props => props.backToProducts ? '0.1rem solid' : 'none'};
margin: 0.5rem 0.5rem 0.2rem 0;
padding: 0.5rem 1rem 0.5rem 0.7rem;
transition: all 0.3s ease-in-out;
border-radius: 0.5rem;
border-color: var(--borderGreen);
&:hover {
    background: var(--submitGreen);
    color: var(--mainWhite);
}

.cart-count {
    position: relative;
    background: white;
    left: -83%;
    border: 0.03em solid;
    padding: 0.1em;
    border-radius: 0.2em; 
}
`

export const CartButton = styled.button`
background: transparent;
background: ${props => props.disabled ? 'var(--hoverYellow)' : 'transparent'};
color: var(--hoverYellow) !important;
color: ${props => props.disabled ? 'black !important' : 'var(--hoverYellow)'}
border: 0.1rem solid;
margin: 0.5rem 0.5rem 0.2rem 0;
padding: 0.5rem 1rem 0.5rem 0.7rem;
transition: all 0.3s ease-in-out;
border-radius: 0.5rem;
border-color: var(--hoverYellow);
&:hover {
    background: var(--hoverYellow);
    color: ${props => props.disabled ? 'black !important' : 'var(--mainWhite) !important'};
}
`

export const GoToCartButton = styled.button`
background: transparent;
background: var(--hoverYellow);
color: black !important;
border: 0.1rem solid;
margin: 0.5rem 0.5rem 0.2rem 0;
padding: 0.5rem 1rem 0.5rem 0.7rem;
transition: all 0.3s ease-in-out;
border-radius: 0.5rem;
border-color: var(--hoverYellow);
&:hover {
    color: white !important;
}
`

export const NavWrapper = styled.nav`
background: var(--navGreen);
`

export const PriceWrapper = styled.h4`
color: rgb(39, 36, 207);
font-style: italic;

`

export const ImgBorder = styled.div`
background: white;
padding: 2rem;
border-radius: 3rem;
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
height: 18rem;

.img {
&:hover {
    transform: scale(1.03);
}
}
`

export const DetailCard = styled.div`
border-radius: 1rem;
color: rgb(125, 125, 125);
letter-spacing: 0.03rem;
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);


.card-header {
    background: var(--navGreen);
    color: white;
    border-radius: 1rem 1rem 0rem 0rem;
    font-size: 2rem;
}

.detail-info {
    font-size: 1.2em;
}
`

export const ProductWrapper = styled.div`
.price {
    color: rgba(36, 148, 41, 0.849);
}
.card {
    border-color: transparent;
    border-radius: 0.5em;
    transition: all 1s linear;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
}

.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.2s linear;
}
&:hover {
    .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 10px 10px 15px 0px rgba(0,0,0,0.2);
    }

    .card-footer {
        background: rgba(196, 196, 196, 0.3);
    }

    .cart-btn {
        right: 2%;
        bottom: 2%;
    }
}

    .img-container {
        position: relative;
        overflow: hidden;  
    }

    .card-img-top {
        transition: all 0.5s ease-in-out;
    }

    .img-container: hover .card-img-top {
        transform: scale(1.05);
    }

    .cart-btn {
        position: absolute;
        bottom: -30%;
        right: -50%;
        transition: all 0.5s ease-in-out;
        background: ${props => props.disabled ? 'var(--hoverYellow)' : 'var(--submitGreen)'};
        border-color: rgba(36, 148, 41, 0.849); 
        transition: all 0.4s linear;
        color: rgb(240, 240, 240);
        padding: 3rem, 3rem, 3rem, 3rem;
    }

    .cart-btn: hover {
        transform: scale(1.03);
        background:rgb(228, 209, 37);
        border-color: rgb(228, 209, 37);
        color: rgb(250,250,250);
    }
}
`
export const ModelContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 2;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#model {
    background: white;
    width: ${props => props.service ? '50vw' : null};
    border-radius: 0.75rem;
}
`

export const ServiceButton = styled.button`
background: transparent;
border: 0.05em solid var(--navGreen);
color: var(--navGreen);
box-shadow: 0.5px 0.5px 0.5px 0.5px;
cursor: pointer;
transition: all 0.3s ease-in-out;
padding: 4px 8px 0px 8px;
font-size: 1.2em;

&:hover {
    background: var(--navGreen);
    color: var(--mainWhite);
}
`