import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/product';

// Instalar paquete para pruebas con mudulos css
// npm i -D identity-obj-proxy

describe('Product Image', () => {
    test('Debe mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img='hola.jpg' className='custom-css' />
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    })
})
