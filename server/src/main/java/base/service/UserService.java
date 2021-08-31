package base.service;

import base.model.User;
import base.pojo.LoginForm;
import base.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@AllArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class UserService implements IUserService {
    private final UserRepository userRepository;

    @Override
    public ResponseEntity<User> createUser(User user) {
        ResponseEntity<User> response;
        boolean available = isUserNameAvailable(user.getUserName()).getBody();
        if(available) {
            response = new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
        } else {
            response = new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return response;
    }

    @Override
    public ResponseEntity<Boolean> isUserNameAvailable(String userName) {
        boolean response;
        HttpStatus status;
        User foundUser = userRepository.findByUserName(userName);
        if(foundUser == null) {
            log.info("The username " + userName + " is available.");
            response = true;
            status = HttpStatus.OK;
        } else {
            log.info("The username " + userName + " is already taken.");
            response = false;
            status = HttpStatus.OK;
        }
        return new ResponseEntity<>(response, status);
    }

    @Override
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public ResponseEntity<User> authenticateUser(LoginForm loginForm) {
        ResponseEntity<User> resp;
        User foundUser = userRepository.findByUserName((loginForm.getUserName()));
        if(foundUser != null) {
            if(foundUser.getPassword().equals(loginForm.getPassword())) {
                log.info("Password correct... authentication successful");
                resp = new ResponseEntity<>(foundUser, HttpStatus.OK);
            } else {
                log.error("Password incorrect... authentication failed.");
                resp = new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        } else {
            log.error("No such user found");
            resp = new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return resp;
    }
}
