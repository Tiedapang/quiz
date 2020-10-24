package com.twuc.shopping.repository;

import com.twuc.shopping.po.CartPO;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CartRepository extends CrudRepository<CartPO, Integer> {
    CartPO findByName(String name);
    List<CartPO> findAll();
}
