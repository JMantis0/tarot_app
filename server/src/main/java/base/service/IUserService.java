package base.service;

import base.model.User;

public interface IUserService {
    User findByUserName(String username);
}
