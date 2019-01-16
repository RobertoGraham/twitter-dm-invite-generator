package io.github.robertograham.dminvitegenerator.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

@Configuration
public class TwitterConfiguration {

    @Bean
    public Twitter twitter(@Value("${twitter.consumerKey}") final String consumerKey,
                           @Value("${twitter.consumerSecret}") final String consumerSecret,
                           @Value("${twitter.accessToken}") final String accessToken,
                           @Value("${twitter.accessTokenSecret}") final String accessTokenSecret) {
        return new TwitterFactory(
            new ConfigurationBuilder()
                .setOAuthConsumerKey(consumerKey)
                .setOAuthConsumerSecret(consumerSecret)
                .setOAuthAccessToken(accessToken)
                .setOAuthAccessTokenSecret(accessTokenSecret)
                .build()
        )
            .getInstance();
    }
}
