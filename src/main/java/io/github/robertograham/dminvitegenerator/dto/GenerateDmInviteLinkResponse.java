package io.github.robertograham.dminvitegenerator.dto;

import java.util.Objects;

public class GenerateDmInviteLinkResponse {

    private final boolean success;
    private final String link;

    public GenerateDmInviteLinkResponse(boolean success, String link) {
        this.success = success;
        this.link = Objects.requireNonNull(link, "link cannot be null");
    }

    public boolean isSuccess() {
        return success;
    }

    public String getLink() {
        return link;
    }

    @Override
    public String toString() {
        return "GenerateDmInviteLinkResponse{" +
            "success=" + success +
            ", link='" + link + '\'' +
            '}';
    }

    @Override
    public boolean equals(Object object) {
        if (this == object)
            return true;
        if (!(object instanceof GenerateDmInviteLinkResponse))
            return false;
        final var generateDmInviteLinkResponse = (GenerateDmInviteLinkResponse) object;
        if (success != generateDmInviteLinkResponse.success) return false;
        return link.equals(generateDmInviteLinkResponse.link);
    }

    @Override
    public int hashCode() {
        int result = (success ? 1 : 0);
        result = 31 * result + link.hashCode();
        return result;
    }
}
