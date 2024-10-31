import { ProductCard } from "../components"

const product = {
    id: '1',
    title: 'test test',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={'Cafe'} />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}
