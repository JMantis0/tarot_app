package service;

import base.model.User;
import base.repository.UserRepository;
import base.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class UserServiceTest {
    private final UserRepository userRepository = Mockito.mock(UserRepository.class);
    private final UserService userService = new UserService(userRepository);

    User user;
    @Test
    public void getUserFromDB() {
//      Here I want to assert that the method got a User from the DB.
        User user = new User();
        String username = "username";
        Mockito.when(userRepository.findByUserName(username)).thenReturn(user);
        User foundUser = userService.findByUserName(username);
        Assertions.assertEquals(user,foundUser);
    }
}
