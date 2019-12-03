import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenthicationService } from '../services/autenthication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(
  private router: Router,
  private authenticationService: AutenthicationService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const currentUser = this.authenticationService.currentUserValue;

  if (currentUser) {
    console.log('usuario autorizado');
    return true;
  }
  console.log('usuario sin autorizacion');
  this.router.navigate(['../login']);
  return false;
}
}
