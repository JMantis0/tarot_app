package service;

import base.model.User;
import base.pojo.LoginForm;
import base.repository.UserRepository;
import base.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class UserServiceTest {
    private final UserRepository userRepository = Mockito.mock(UserRepository.class);
    private final UserService userService = new UserService(userRepository);
    @Test
    public void findByExistingUserName() {
//      Here I want to assert that the method got a User from the DB.
        User user = new User();
        user.setUserName("USERNAME");
        Mockito.when(userRepository.findByUserName("USERNAME")).thenReturn(user);
        User foundUser = userService.findByUserName("USERNAME");
        Assertions.assertEquals(user,foundUser);
    }

    @Test
    public void findByNonExistingUserName() {
        User user = new User();
        user.setUserName("USERNAME");
        Mockito.when(userRepository.findByUserName("USERNAME")).thenReturn(user);
        User foundUser = userService.findByUserName("USERNAME");
        Assertions.assertEquals(user,foundUser);
    }

    @Test
    public void authenticateWithCorrectPassword() {
        LoginForm lForm = new LoginForm();
        User user = new User();
        user.setUserName("correct username");
        user.setPassword("correct password");
        user.setFirstName("Whatever First Name");
        user.setLastName("Whatever Last Name");
        lForm.setPassword("correct password");
        lForm.setUserName("correct username");
        Mockito.when(userRepository.findByUserName(lForm.getUserName())).thenReturn(user);
        Assertions.assertEquals(userService.authenticateUser(lForm), new ResponseEntity<>(user, HttpStatus.OK));

    }

    @Test
    public void authenticateWithIncorrectPassword() {
        LoginForm lForm = new LoginForm();
        User user = new User();
        user.setUserName("correct username");
        user.setPassword("correct password");
        user.setFirstName("Whatever First Name");
        user.setLastName("Whatever Last Name");
        lForm.setPassword("incorrect password");
        lForm.setUserName("correct username");
        Mockito.when(userRepository.findByUserName(lForm.getUserName())).thenReturn(user);
        Assertions.assertEquals(userService.authenticateUser(lForm), new ResponseEntity<>(HttpStatus.UNAUTHORIZED));

    }

    @Test
    public void authenticateWithNoSuchUserName() {
        LoginForm lForm = new LoginForm();
        User user = null;
        lForm.setPassword("correct password");
        lForm.setUserName("No Such Username");
        Mockito.when(userRepository.findByUserName(lForm.getUserName())).thenReturn(null);
        Assertions.assertEquals(userService.authenticateUser(lForm), new ResponseEntity<>(HttpStatus.BAD_REQUEST));

    }
}
