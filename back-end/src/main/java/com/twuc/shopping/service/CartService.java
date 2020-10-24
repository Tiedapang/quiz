package com.twuc.shopping.service;

import com.twuc.shopping.domain.Cart;
import com.twuc.shopping.po.CartPO;
import com.twuc.shopping.repository.CartRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    final CartRepository cartRepository;
    public CartService(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    public boolean operaCart(CartPO cartPo,String opera) {
        CartPO cp = cartRepository.findByName(cartPo.getName());
        if(cp!=null){
            cartPo.setId(cp.getId());
            if(opera.equals("add")){
                cartPo.setCount(cp.getCount()+cartPo.getCount());
            }else{
                cartPo.setCount(cp.getCount()-cartPo.getCount());
            }

        }
        return (cartRepository.save(cartPo) != null);

    }

    public List<CartPO> findAllCartDatas() {
        List<CartPO> cartPOS = cartRepository.findAll();
        return cartPOS;
    }

    public void deletCart(String name) {
        CartPO cartPO = cartRepository.findByName(name);
        if(cartPO!=null){
            cartRepository.deleteById(cartPO.getId());
        }
    }

    public void deleteAllCart() {
        cartRepository.deleteAll();
    }
}
