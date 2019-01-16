package io.github.robertograham.dminvitegenerator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import twitter4j.Twitter;
import twitter4j.TwitterException;

import java.util.Objects;

@Service
public final class DmInviteLinkService {

    private final Twitter twitter;

    @Autowired
    public DmInviteLinkService(final Twitter twitter) {
        this.twitter = Objects.requireNonNull(twitter, "twitter cannot be null");
    }

    public String generatedDmInviteLink(final String userDisplayName,
                                        final String dmText) {
        try {
            final var user = twitter.showUser(userDisplayName);
            return getUriComponentsBuilderInstance().queryParam("recipient_id", user.getId())
                .queryParam("text", dmText)
                .toUriString();
        } catch (final TwitterException twitterException) {
            return twitterException.getErrorMessage();
        }
    }

    private UriComponentsBuilder getUriComponentsBuilderInstance() {
        return UriComponentsBuilder.newInstance()
            .scheme("https")
            .host("twitter.com")
            .pathSegment("messages", "compose");
    }
}
