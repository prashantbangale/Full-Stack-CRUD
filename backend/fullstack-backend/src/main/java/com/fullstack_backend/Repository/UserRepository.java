package com.fullstack_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack_backend.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
