package com.finalproject.ecommorce.dto;

import com.finalproject.ecommorce.entity.Address;
import com.finalproject.ecommorce.entity.Customer;
import com.finalproject.ecommorce.entity.Order;
import com.finalproject.ecommorce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase { //set for collection

    private Customer customer;

    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
