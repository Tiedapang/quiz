package com.twuc.shopping.po;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "productPO")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductPO {
  @Id @GeneratedValue private int id;
  private String name;
  private int price;
  private int count;
  private String unit;

}
