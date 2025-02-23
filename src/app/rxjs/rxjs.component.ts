import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { combineLatest, concat, forkJoin, from, fromEvent, interval, merge, Observable, of, partition, Subscription, throwError, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap, debounceTime, delay, filter, map, mergeMap, reduce, retry, skip, switchMap, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {


  
  timerObs!:Subscription;
  intervalObs!:Subscription;
 @ViewChild('fromEvent',{static:false}) fromEvent:any;

  newObservable1 = new Observable((observer)=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
   // observer.error('Error occurred');
    observer.complete();
  })

  newObservable2 = Observable.create((observer:any)=>{
    observer.next('A');
    observer.next('B');
    observer.next('C');
   // observer.error('Some error occurred');
    observer.complete()
  })

  rxjs(){

   //timer- The timer operator creates an obervable that emits a values after specific delay
//let tmr=timer(10,2000)
//this.timerObs=tmr.subscribe(x=>{console.log(x)})

//timer emits the first value immediately,then every value after a particular interval,But interval emits first also after the particular interval
//this.timerObs=timer(0, 3000).subscribe(n => console.log('timer', n));
//this.intervalObs=interval(3000).subscribe(n => console.log('interval', n))

    //from
    //The from operator will convert an array into observable
    //let dt = from([1,2,3]);
   // dt.subscribe((el)=>{console.log(el)})

     //of
    //The of operator will convert an ordinary stream of data into an observable stream of data
   // let dt1 = of(1,2,3);
   // dt1.subscribe((el)=>{console.log(el)})

   //map- operator will transform an the emitted values in an observable
  // let dt2 = of(4,6,9)
  // let mappedObs=dt2.pipe(map(x=>x*2))
  // mappedObs.subscribe((ele)=>{console.log(ele)})

  //filter- operator will filter the emitted values in an observable based on condtions
  //let dt3=of(3,5,6) 
 // let obs2= dt3.pipe(filter(x=>x%3==0));
  //obs2.subscribe((ele=>{console.log(ele)}))

//tap-operator enables to perform side effects without effecting the emitted values
//let dt3=of(4,5,6);
//let obs= dt3.pipe(tap(x=>{
//console.log('Processing '+x)
//}))
//obs.subscribe()

//concat- operator concatenates multiple observables sequentially emitting values
//let obs1=of(3,4,5);
//let obs2=of(6,7,8)
//let ctd=concat(obs1,obs2);
//ctd.subscribe((x=>{console.log(x)}))

//interval-operator returns an observable that emits an infinite sequence of ascending integers with a constant interval of time choosing between the emissions
//let obs=interval(1000);
//obs.subscribe((x)=>{console.log(x)})
//0,1,2,3,4................infinity

//take-operator can limit the value of numbers emitted by interval operator
//let obs1=interval(1000).pipe(take(4))
//obs1.subscribe((x)=>{console.log(x)})

//merge-operator combines multiple observables into a single observable that emits value concurrently
//let obs1=interval(1000).pipe(take(4));
//let obs2=interval(500).pipe(take(7));
//let combinedobs=merge(obs1,obs2);
//combinedobs.subscribe((x)=>{console.log(x)})
//0,0,1,2,1,3,4,2,5,6,3

//reduce-operator accumulates value overtime provides a single result
// let dt = of(3,4,5);
 //let obs1=dt.pipe(reduce((x,y)=>x+y));
 //let obs2=dt.pipe(reduce(((x,y)=>x+y),100));
 //obs1.subscribe((x=>{console.log(x)}))

//retry-operator
//The retry operator allows retrying a failed observable
//const request = ajax('https://api.example.com/data');
//const retryRequest = request.pipe(retry(3));

// retryRequest.subscribe(
//   result => console.log(result),
//   error => console.error('Retried 3 times, but still failed.')
// );

//concatMap,switchMap,mergeMap
//Suppose there is an observable that emit value and we are creating another observable for each emiited values.If the inner observable takes a significant time to complete,it can lead a backlog for outer values waiting to be processed.

//Using concatMap() is diligently processing each value in order.
//Use switchMap(),If want to process the recent value and discard the previous values
//Use mergeMap,if want to execute as it arrives

//Using exhaustMap, if a new value is coming from observable and previous observable is not yet completed,the new value will ignored

// let constobs = of(2000,3000,1000);
// let obs1=constobs.pipe(concatMap(ele=>of(`Delay of ${ele} seconds`).pipe(delay(ele))))
// obs1.subscribe(res=>{
//   console.log(res)
// })

//forkJoin is an operator that waits for multiple observable to complete and emits the latest values of each observables in an array

//combineLatest operator returns an observable that emits a value,whenever any of the input observable emits a value
// let obs1=of(1,2,3,4);
// let obs2=of(5,6,7,8);
// let obs3=of(9,10,11,12);
// let obs4=of(13,14,15,16);
// combineLatest(obs1,obs2,obs3,obs4).subscribe(x=>console.log(x))


//timer- The timer operator creates an obervable that emits a values after specific delay
//let tmr=timer(0,1000)
//this.timerObs=tmr.subscribe(x=>{console.log(x)})

//partition-splitting observable partition is used to split one observable into two
//const source = from([1, 2, 3, 4, 5, 6]);
//const [mul3, rest] = partition(source,x=>x%3==0)
//mul3.subscribe(val => console.log(`multiples3: ${val}`));
//rest.subscribe(val => console.log(`Rest: ${val}`));

//skip-operator is to emit skip the first n values emitted by an observable
//let obs1= of(3,5,7,8,9,1,2);
//obs1.pipe(skip(3)).subscribe(x=>console.log(x))

//takeUntil- operator completes the first observable when the second observable emits
//let source = interval(1000);
//let second = timer(5000);
//source.pipe(takeUntil(second)).subscribe(x=>console.log(x))

//catchError()-operator intercepts an error in observable and replace it with observable or default value;
// const source = of('1','2', '3', '4', '5','3');
// const example = source.pipe(
//   map(value => parseInt(value)),
//   catchError(error => of('Error occurred!'))
// );
// example.subscribe(
//   value => console.log(value),
//   error => console.error(error)
// );

  }


//fromEvent-Using fromEvent operator we can create observables from DOM events like 'click','change' etc
//It has two parameters the target element and the eventName

// ngAfterViewInit(){
//     let obs=fromEvent(this.fromEvent.nativeElement,'click');
//     obs.subscribe((ele)=>{
//       console.log(1)
//     })
//   }

  //deBounceTime-operator can make a delay before emitting the latest value
  // ngAfterViewInit(){
  //   let obs=fromEvent(this.fromEvent.nativeElement,'click').pipe(debounceTime(5000));
  //   obs.subscribe((ele)=>{
  //     console.log(1)
  //   })
  // }

  unsunscribe(){
    this.timerObs.unsubscribe();
    this.intervalObs.unsubscribe();
  }
}
