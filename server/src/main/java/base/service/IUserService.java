package base.service;

import base.model.User;
import base.pojo.LoginForm;
import org.springframework.http.ResponseEntity;

public interface IUserService {
    ResponseEntity<Boolean> isUserNameAvailable(String userName);
    User findByUserName(String userName);
    ResponseEntity<User> createUser(User user);
    ResponseEntity<User> authenticateUser(LoginForm loginForm);
}
