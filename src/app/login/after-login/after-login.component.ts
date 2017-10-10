import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from '../../shared/auth-guard/auth-guard.service';
import {Router} from '@angular/router';
import {AgentService} from '../../shared/agent/agent.service';

@Component({
  selector: 'dnor-after-login',
  template: ''
})
export class AfterLoginComponent implements OnInit {

  constructor(authGuardService: AuthGuardService, agentService: AgentService, router: Router) {
    if (authGuardService.isAuthorized()) {
      agentService.getAgent().then((agent) =>
        agentService.putAgentName(agent.agentid, authGuardService.getUserData().preferred_username));
      const lastRouteRequested = authGuardService.getLastRouteRequested();
      if (lastRouteRequested !== undefined) {
        router.navigateByUrl(lastRouteRequested.url, {
          queryParams: lastRouteRequested.queryParams,
          replaceUrl: true
        });
      } else {
        router.navigate(['/myspaces'], {replaceUrl: true});
      }
    } else {
      router.navigate(['/welcome'], {replaceUrl: true});
    }
  }

  ngOnInit() {
  }

}