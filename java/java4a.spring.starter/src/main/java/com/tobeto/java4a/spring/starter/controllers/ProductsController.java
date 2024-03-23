package com.tobeto.java4a.spring.starter.controllers;

import com.tobeto.java4a.spring.starter.entities.Product;
import org.springframework.web.bind.annotation.*;

@RequestMapping("products")
@RestController
public class ProductsController {


    @GetMapping
    public  String sayHello(@RequestParam String name){
        return "Merhabe Tobeto " + name;
    }
    @PostMapping
    public  String sayGoodBy(@RequestBody Product product){
        return "Eklenen ürün bilgileri id:" + product.getId();
    }
}
