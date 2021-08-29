package base.controller;

import base.model.User;
import base.pojo.LoginForm;
import base.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    @GetMapping("/is_username_available")
    public ResponseEntity<Boolean> isUserNameAvailable(@RequestParam String userName) {
        log.info("Get request from client on /api/is_username_available with request parameter: " + userName);
        return userService.isUserNameAvailable(userName);
    }

    @PostMapping("/createuser")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        log.info("Post request from client on /api/createuser with request body: " + user.toString());
        return userService.createUser(user);
    }

    @PostMapping("/authenticate_user")
    public ResponseEntity<User> authenticateUser(@RequestBody LoginForm loginForm) {
        log.info("Post request from client on /api/authenticate_user with request body: " + loginForm.toString());
        return userService.authenticateUser(loginForm);
    }


}
