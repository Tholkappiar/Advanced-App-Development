package com.backend.edugateway.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.edugateway.Entity.PaymentEntity;
import com.backend.edugateway.Service.PaymentService;

/**
 * CollegeController
 */
@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/allPayments")
    public List<PaymentEntity> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{id}")
    public Optional<PaymentEntity> getPaymentById(@PathVariable Long id) {
        return paymentService.getPaymentById(id);
    }

    @PostMapping
    public PaymentEntity createPayment(@RequestBody PaymentEntity paymentEntity) {
        return paymentService.createPayment(paymentEntity);
    }

    @DeleteMapping("/deletePayment/{id}")
    public void deletePayment(@PathVariable Long id) {
        paymentService.deletePayment(id);
    }

    @GetMapping("/getPayment/{name}")
    public List<PaymentEntity> getPaymentByName(@PathVariable String name) {
        return paymentService.getPaymentByName(name);
    }

    @PutMapping("/updatePayment/{id}")
    public PaymentEntity updateUser(@PathVariable Long id, @RequestBody PaymentEntity paymentEntity) {
        return paymentService.updatePayment(id, paymentEntity);
    }
}