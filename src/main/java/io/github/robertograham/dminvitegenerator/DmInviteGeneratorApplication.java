package io.github.robertograham.dminvitegenerator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DmInviteGeneratorApplication {

    public static void main(String[] args) {
        System.setProperty("spring.config.name", "dm-invite-generator");
        SpringApplication.run(DmInviteGeneratorApplication.class, args);
    }

}

