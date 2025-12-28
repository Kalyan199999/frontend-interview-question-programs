import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://dummyjson.com/products?limit=100";

const ScrollIndicator = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async () => 
    {
        setLoading(true);
        try 
        {
            const response = await axios.get(url);
            setData(response.data.products);
            setError("");
        } 
        catch (error) 
        {
            setError(error.message);
        } 
        finally 
        {
            setLoading(false);
        }
    };

    const handleScrollPercentage = () => {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percentage = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(percentage);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);
        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        };
    }, []);

    return (
        <div className="flex flex-col gap-2 border-2 p-2 border-red-500 relative">

            {/* Scroll Indicator */}
            <div className="sticky top-0 z-10 h-4 w-full bg-gray-300 rounded-md">
                <div
                    className="h-full bg-gray-500 text-xs text-white text-center whitespace-nowrap overflow-hidden transition-all duration-150 rounded-md"
                    style={{ width: `${scrollPercentage}%` }}
                >
                    {Math.round(scrollPercentage)}%
                </div>
            </div>

            <div className="flex flex-col gap-2">
                {loading ? (
                    <h1 className="text-2xl text-blue-500">Loading...</h1>
                ) : (
                    data.map((product) => (
                        <h1
                            key={product.id}
                            className="text-2xl bg-blue-400 text-white text-center"
                        >
                            {product.title}
                        </h1>
                    ))
                )}

                {error && (
                    <h1 className="text-red-500 text-2xl">{error}</h1>
                )}
            </div>

        </div>
    );
};

export default ScrollIndicator;