package base.service;

import base.model.User;
import base.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService implements IUserService {
    private final UserRepository userRepository;

    @Override
    public User findByUserName(String username) {
        return userRepository.findByUserName(username);
    }
}
