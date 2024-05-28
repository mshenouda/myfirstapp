function Forloops() {
    const products = [
        { name: "Desktop", price: 200 },
        { name: "Laptop", price: 300 },
        { name: "Tablet", price: 100 }
    ];
    const ProductList = products.map((product, index) => {
        return (
            <h3 key={index}>
                {product.name}: ${product.price}
            </h3>
        );
    });

    return (<div>{ProductList}</div>); 
}

export default Forloops;