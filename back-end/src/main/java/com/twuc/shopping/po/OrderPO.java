package com.twuc.shopping.po;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "order")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderPO {
    @Id
    @GeneratedValue
    private int id;
    private int count;
    @OneToOne(cascade = CascadeType.REMOVE, mappedBy = "order")
    private ProductPO product;

}
