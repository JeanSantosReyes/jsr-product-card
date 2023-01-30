# Despliegue de paquete de componentes - Jean Santos

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jsr-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```