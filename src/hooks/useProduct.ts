import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        setCounter(newValue);
        // Confirm that the onChange have value
        // if (onChange) { onChange() }
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        isMounted.current = true;
        setCounter(value);
        return () => {
            isMounted.current = false;
        }
    }, [value])

    return {
        // Properties
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        // Methods
        increaseBy,
        reset,
    }
}