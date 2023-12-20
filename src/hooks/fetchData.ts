import { useState, useEffect } from "react";


type FetchFunction<T> = () => Promise<T>;

export function useFetch<T>(fetchFunction: FetchFunction<T>) {
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!fetchFunction || typeof fetchFunction !== 'function') {
            setError('Fetch function is not defined or not a function');
            return;
        }

        const fetchData = async () => {
            setIsFetching(true);
            setError(null);

            try {
                const result = await fetchFunction();
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsFetching(false);
            }
        };

        fetchData();
    }, [fetchFunction]);

    return { isFetching, error, data, setData, setError, setIsFetching };
}