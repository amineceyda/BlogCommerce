package com.finalproject.ecommorce.service;

import com.finalproject.ecommorce.dto.Purchase;
import com.finalproject.ecommorce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
