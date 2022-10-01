import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductCard from "./components/ProductCard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>App</div>
      <ProductCard />
    </QueryClientProvider>
  );
};

export default App;
