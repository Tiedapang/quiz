package com.twuc.shopping.po;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductPO {
  @Id @GeneratedValue private int id;
  private String name;
  private int price;
  private String unit;
  private String imgUrl;
  @OneToOne
  private OrderPO orderPO;

}
