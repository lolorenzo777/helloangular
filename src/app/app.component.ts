import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, interval, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// My Application
export class AppComponent implements OnInit, OnDestroy {

  seconds: number = 0;
  counterSub: Subscription | undefined;

  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 3000
      );
    }
  )

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.counterSub?.unsubscribe();
  }

  AuthIsConnected() {
    return this.authService.isAuth
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('connexion réussie !');
        //        this.authStatus = this.authService.isAuth;
        const counter = interval(1000);
        this.counterSub = counter.subscribe(
          (value: number) => {
            this.seconds = value;
          },
          // (error:any) => {
          //   console.log('erreur')
          // },
          // () => {
          //   console.log('obesrvable completé')
          // }
        );
        this.router.navigate(['urls'])
      }
    )
  }

  onSignOut() {
    this.authService.signOut();
    this.counterSub?.unsubscribe();
    this.seconds = 0;
    this.router.navigate(['/auth'])
  }
}
