Signals

The toSignal function is used to convert an RxJS Observable into a reactive Angular Signal

The signal is a special variable that holds a value and it provides a notification when the value changes.
It behaves similarly to the async pipe, which subscribes to an Observable and updates the UI when the new Observable emits a new value.

We can import signal from ‘@angular/core’

quantity = signal<Vehicle>({
   num:6,
   type:'twowheeler'
 })

 changeSignal(){
   this.quantity.set({
    num:7,
    type:'fourwheeler'
  })
 }

 template: `
   {{quantity().type}}
<!-- <button (click)=changeSignal()>Change</button> -->
  `,

The ‘set’ method can be used to change the value of a signal.

The methods used to update signal values are set,update and mutate

computed() function

The computed() creates a  new signal that depends on other signals 

Golden rule of signal components

The change detection for a component will be scheduled when and only when a  signal read in the template notifies angular it has changed

If we want to perform some other operations when the signal value change, then effect() function can be used.

effect(()=>{
console.log(‘My Value change’, myValue())
})

https://stackblitz.com/edit/angular-d1jykfcv?file=src%2Fmain.ts

https://www.freecodecamp.org/news/angular-signals/

https://stackblitz.com/edit/angular-ednkcj?file=src%2Fmain.ts,src%2Ftesting-arrays.component.ts

We can convert an observable to a signal using toSignal() function

Import { toSignal  } from ‘@angular/core/rxjs-interop’;

export class SigComponent {

obs = interval(1000).pipe(take(5))
count=toSignal(this.obs,{initialValue:12})
}
Component.html

{{count()}}
//output-12->0->1->2->3->4


