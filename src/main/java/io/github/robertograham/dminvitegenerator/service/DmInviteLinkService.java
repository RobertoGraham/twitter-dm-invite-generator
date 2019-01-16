package io.github.robertograham.dminvitegenerator.service;

import io.github.robertograham.dminvitegenerator.dto.GenerateDmInviteLinkResponse;
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

    public GenerateDmInviteLinkResponse generatedDmInviteLink(final String userDisplayName,
                                                              final String dmText) {
        try {
            final var user = twitter.showUser(userDisplayName);
            final var link = getUriComponentsBuilderInstance().queryParam("recipient_id", user.getId())
                .queryParam("text", dmText)
                .toUriString();
            return new GenerateDmInviteLinkResponse(true, link);
        } catch (final TwitterException twitterException) {
            return new GenerateDmInviteLinkResponse(false, "");
        }
    }

    private UriComponentsBuilder getUriComponentsBuilderInstance() {
        return UriComponentsBuilder.newInstance()
            .scheme("https")
            .host("twitter.com")
            .pathSegment("messages", "compose");
    }
}
