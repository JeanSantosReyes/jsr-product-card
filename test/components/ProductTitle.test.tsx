import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components/';
import { product1 } from '../data/product';

// Instalar paquete para pruebas con mudulos css
// npm i -D identity-obj-proxy

describe('Product Title', () => {
    test('Debe mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Titulo JS" />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})
