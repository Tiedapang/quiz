package com.twuc.shopping.api;

import com.twuc.shopping.domain.Order;
import com.twuc.shopping.domain.Product;
import com.twuc.shopping.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

public class OrderController {
    @Autowired
    OrderService orderService;
    @GetMapping("/order/list")
    public List<Order> getOrderList() {
        List<Order> Orders = orderService.findAll().stream().map(
                item ->
                        Order.builder().productName(item.getProduct().getName())
                                .count(item.getCount())
                                .price(item.getProduct().getPrice())
                                .unit(item.getProduct().getUnit())
                                .build()
        ).collect(Collectors.toList());
        return Orders;
    }
}
