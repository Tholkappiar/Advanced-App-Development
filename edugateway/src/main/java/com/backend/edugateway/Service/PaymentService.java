package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.edugateway.Entity.PaymentEntity;
import com.backend.edugateway.Repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<PaymentEntity> getAllPayments() {
        return paymentRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<PaymentEntity> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    @SuppressWarnings("null")
    public PaymentEntity createPayment(PaymentEntity joinedCollege) {
        return paymentRepository.save(joinedCollege);
    }

    @SuppressWarnings("null")
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    public List<PaymentEntity> getPaymentByName(String name) {
        return paymentRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public PaymentEntity updatePayment(Long id, PaymentEntity paymentEntity) {
        Optional<PaymentEntity> updatePaymentEntity = paymentRepository.findById(id);
        if (updatePaymentEntity.isPresent()) {
            PaymentEntity updatedPaymentEntity = updatePaymentEntity.get();
            updatedPaymentEntity.setName(paymentEntity.getName());
            updatedPaymentEntity.setCourses(paymentEntity.getCourses());
            updatedPaymentEntity.setAddress(paymentEntity.getAddress());
            updatedPaymentEntity.setDate(paymentEntity.getDate());
            updatedPaymentEntity.setStatus(paymentEntity.getStatus());
            return paymentRepository.save(updatedPaymentEntity);
        }
        return null;
    }
}
