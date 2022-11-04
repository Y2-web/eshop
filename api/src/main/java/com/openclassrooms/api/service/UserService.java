package com.openclassrooms.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.openclassrooms.api.model.User;
import com.openclassrooms.api.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	public Optional<User> getUser(final Long id) {
		return userRepository.findById(id);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public void deleteUser(final long id) {
		userRepository.deleteById(id);
	}

	public User saveUser(User user) {
		User savedUser = userRepository.save(user);
		return savedUser;
	}

}
