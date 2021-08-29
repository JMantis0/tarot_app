package base.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class User {
    @Id
    String userId;
    String firstName;
    String lastName;
    String password;
    String userName;
}
