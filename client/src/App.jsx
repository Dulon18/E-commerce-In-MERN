// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/cartPage";
import SearchResultPage from "./pages/searchResultPage";
import BlogPage from "./pages/blogPage";
import Error404Page from "./pages/error404Page";
import ReviewPage from "./pages/reviewPage";
import CheckoutPage from "./pages/checkoutPage";
import FaqPage from "./pages/faqPage";
import PrivacyPage from "./pages/privacyPage";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/searchResultPage" element={<SearchResultPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/error" element={<Error404Page />}></Route>
          <Route path="/reviews" element={<ReviewPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/faq" element={<FaqPage />}></Route>
          <Route path="/privacy" element={<PrivacyPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
