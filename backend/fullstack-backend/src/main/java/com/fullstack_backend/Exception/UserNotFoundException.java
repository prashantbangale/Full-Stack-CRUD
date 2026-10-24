package com.fullstack_backend.Exception;

public class UserNotFoundException extends RuntimeException {
	
	public UserNotFoundException(Long id) {
		super("Could Not Found the User with id "+id);
	}

}
