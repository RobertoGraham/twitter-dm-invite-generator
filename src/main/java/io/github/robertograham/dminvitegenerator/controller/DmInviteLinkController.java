package io.github.robertograham.dminvitegenerator.controller;

import io.github.robertograham.dminvitegenerator.service.DmInviteLinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public final class DmInviteLinkController {

    private final DmInviteLinkService dmInviteLinkService;

    @Autowired
    public DmInviteLinkController(DmInviteLinkService dmInviteLinkService) {
        this.dmInviteLinkService = dmInviteLinkService;
    }

    @GetMapping("/generateDmInviteLink")
    public String generateDmInviteLink(@RequestParam("displayName") final String displayName,
                                       @RequestParam("text") final String text) {
        return dmInviteLinkService.generatedDmInviteLink(displayName, text);
    }
}
