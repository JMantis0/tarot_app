package base.repository;

import base.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "*", allowedHeaders = "*")
public interface UserRepository extends MongoRepository<User, String> {
    User findByUserName(String userName);
}
