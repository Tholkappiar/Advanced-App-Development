package com.backend.edugateway.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.edugateway.Entity.PaymentEntity;
import com.backend.edugateway.Repository.PaymentRepository;
import com.backend.edugateway.dto.PaymentDTO;

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
    public PaymentEntity createPayment(PaymentEntity paymentEntity) {
        paymentEntity.setName(paymentEntity.getName().toLowerCase().trim());
        paymentEntity.setCourses(paymentEntity.getCourses().toLowerCase().trim());
        paymentEntity.setDate(paymentEntity.getDate().trim());
        paymentEntity.setStatus(paymentEntity.getStatus());
        return paymentRepository.save(paymentEntity);
    }

    @SuppressWarnings("null")
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    public List<PaymentEntity> getPaymentByName(String name) {
        return paymentRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public PaymentEntity updatePayment(Long id, PaymentDTO paymentDTO) {
        Optional<PaymentEntity> updatePaymentEntity = paymentRepository.findById(id);
        if (updatePaymentEntity.isPresent()) {
            PaymentEntity updatedPaymentEntity = updatePaymentEntity.get();
            updatedPaymentEntity.setCourses(paymentDTO.getCourses().toLowerCase().trim());
            updatedPaymentEntity.setAddress(paymentDTO.getAddress().toLowerCase().trim());
            updatedPaymentEntity.setDate(paymentDTO.getDate().toLowerCase().trim());
            updatedPaymentEntity.setStatus(paymentDTO.getStatus());
            return paymentRepository.save(updatedPaymentEntity);
        }
        return null;
    }
}
