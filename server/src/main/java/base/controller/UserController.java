package base.controller;

import base.model.User;
import base.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@Slf4j
@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    public ResponseEntity<User> createUser(@RequestBody User user) {

    }




}
