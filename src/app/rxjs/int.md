TIN

https://www.geeksforgeeks.org/courses?source=google&medium=cpc&device=m&keyword=&matchtype=&campaignid=22087698175&adgroup=173005645876&gad_source=2&wbraid=CmQKCAiAst67BhA6ElQAWJBiDVSzOHIkM95sIGD_C9O6fJ7ahcdVNk9kjknilgkbLPZ7YBnJm-ESC9zqL0LpK23qXLwjjntOVm0p_nPthrfsk1nR3Cr7nZs8XVgJCNhF6JUaApT4

1.  call(),apply(),bind()
2.  Async Pipe
3.  JWT Tokens
4.  RxJS and RxJS signals
5.Angular JSON Configuration
6.HTTP Batching
7.Unit Testing

In JavaScript, the value of the this keyword is determined by how a function is called. By using the call(), apply(), and bind() methods, we can explicitly set the value of the this keyword, regardless of how the function is called. This can be especially useful when working with complex code structures, where the value of this may change depending on how functions are nested and called.

How to optimize angular application ?

The key techniques to optimize Angular Application are

1.Lazy Loading-That is to split the application into modules and load them only when needed
2.OnPush ChangeDetection- Use the OnPush Change Detection Strategy to minimize unnecessary checks for changes in your components
3.AOT Compilation: Ahead of time compilation pre compiles your Angular templates during the build process, resulting in faster rendering in the process.
4.TrackBy in ngFor: Use the TrackBy Function in ngFor loop to optimize the rendering of the lists when items change.
*5.HTTP Batching


ChangeDetection Strategy

https://www.youtube.com/watch?v=_IRCGIsi7vM

Change detection is the mechanism by which angular keeps the template in sync with the component

There are two types of Change detection strategy.
One is Default and other is OnPush

The "OnPush" change detection strategy is a feature in Angular that optimizes the change detection process by reducing the number of checks and updates made by Angular's change detection mechanism.

There are four ways we can make the change detection possible in "OnPush" change detection strategy.

1.Using Input method
2.By triggering events(‘click’,’change’)
3.subscribe an observable that emit values with an async pipe
4.using the functions markForCheck()or detectChanges() from changeDetectionRef,that needs to import from angular core. 

https://stackblitz.com/edit/angular-ussepd?file=src%2Fmain.ts,src%2Fparent%2Fparent.component.ts,src%2Fchild2%2Fchild2.component.ts,src%2Fchild1%2Fchild1.component.ts,src%2Fparent%2Fparent.component.html,src%2Fchild1%2Fchild1.component.html


RxJS - 10 Operators

https://stackblitz.com/edit/angular-rxjs-top-10-operators?file=src%2Fapp%2Fapp.component.ts



async Pipe

In Angular, the async pipe is a pipe that essentially does these three tasks: It subscribes to an observable or a promise and returns the last emitted value. Whenever a new value is emitted, it marks the component to be checked. That means Angular will run Change Detector for that component in the next cycle

NgRx

NgRx is something that is widely used in enterprise applications to maintain their state
Commonly when we want to share data between non-related components we use RxJS behavior subject observables.But imagine if the component is growing large,it will be a bottleneck handle data sharing using observables,that needs to lot of coding and need to maintain stores

NgRX is here to help us
NgRx do similar jobs that observables do but in an efficient way.


The main thing in NgRX state management is the store where we maintain the application states.

In NgRX we will create some actions.Based on actions the reducer will act.Reducer is to do some manipulations.The reducer will store all the state values and reducer performs some logics based on action what it got.

Suppose we have a component that we want to display our data.For that we need to select data from the store.So we create a selector to select value from the store.Then the selector will fetch the data and go in the component.The store will send data to selector and selector will pass that particular slice and send it to the component and the component will view that data 

In the same way suppose has some buttons and it will trigger actions while clicking,thus the component will dispatch some actions and based on the actions the reducer will react.Based on the reactivity it will go and store data in the store.Based on whatever data in the store,the component selects the data,the selector will helps you selects the required data and send it to the component and the component will view the data

This is life cycle of an NgRX application goes on
It can be done in advance way by handling API calls.

https://stackblitz.com/edit/angular-rwdgwk?file=src%2Fapp%2Fcounter.actions.ts

https://stackblitz.com/edit/angular-rwdgwk-lodugeq8?file=src%2Fapp%2Fmy-counter%2Fmy-counter.component.html,src%2Fapp%2Fmy-counter%2Fmy-counter.component.ts,src%2Fapp%2Fcounter.reducer.ts,src%2Fapp%2Fcounter.actions.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html

https://stackblitz.com/edit/angular-rwdgwk-w2eeacme?file=src%2Fapp%2Fmy-counter%2Fmy-counter.component.html,src%2Fapp%2Fmy-counter%2Fmy-counter.component.ts,src%2Fapp%2Fcounter.reducer.ts,src%2Fapp%2Fcounter.actions.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html

https://stackblitz.com/edit/angular-rwdgwk-z8swc8az?file=src%2Fapp%2Fmy-counter%2Fmy-counter.component.html,src%2Fapp%2Fmy-counter%2Fmy-counter.component.ts,src%2Fapp%2Fcounter.reducer.ts,src%2Fapp%2Fcounter.actions.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html


https://stackblitz.com/edit/angular-rwdgwk-31qmhite?file=src%2Fapp%2Fmy-counter%2Fmy-counter.component.html,src%2Fapp%2Fmy-counter%2Fmy-counter.component.ts,src%2Fapp%2Fcounter.reducer.ts,src%2Fapp%2Fcounter.actions.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.component.html




https://www.youtube.com/watch?v=a3_GW3RBqn0


Interceptors

https://requestly.com/blog/understanding-angular-interceptors-beyond-http/#:~:text=Angular%20interceptors%20are%20very%20powerful,easier%2Dto%2Dmaintain%20code.

https://youtu.be/_yKNT4xpenE?si=PD9jefAFXhPUNQCZ

Angular interceptors act like a middleware between angular application and server.They intercept requests before they sent to the server and responses before they reach our application components.
This allows developers to modify requests by adding headers, modifying request/response bodies and changing status codes.

To use an interceptor use the command line

ng generate interceptor interceptors/interceptorName

Then in the interceptor file we can create exported class with names that implements HttpInterceptor, that imports from @angular/http
add the logics inside it that we need to manipulate request or response
Then in app.module.ts file, list this interceptors in the providers array. 


JWT Tokens

Authentication- Authentication is the process of verifying the identity of a user or a process.There are certain rules and policies to prevent un-authenticated users from accesing certain pages or even data

Authorization is the process of giving access to certain resources based on certain rules or policies
JSON Web Token(JWT)

JSON Web Token is an industry standard for representing claims between two different parties securely.

A Token is made of three main components- header,payload and signature.

The header holds two things,the type of Token and the sign in algorithm 
{
alg:’HS256’,
typ:’JWT’
}

ng-template,ng-container,ng-content

The payload holds claims, the claims are just pieces of information describing a subject.There are three types of claims-registered,public and private.registered claims are mostly recommended 

The signature is used to verify the message that the message was not tampered along the way.
It holds three pieces of data-the encoded header,payload and the secret key

When the user logins, what the server does is at point of login,it logs the user in if the user is registered in the system and the server issues a jwt token and send it to the client with the response back for the login request.And then the client stores it in the browser(in localstorage).Then for every requests this jwt token will be added in the header and the server will validate this token.If the token is valid,the server will send back the response,otherwise will send back an unauthorized bad request and did not allow user to move forward.
JWT token expiration


To detect jwt expiration, we will create an http interceptor,so for that install jwt-code to decode our jwt. So use the command

‘npm install jwt-decode’

Then install the interceptor 

eg:ng g interceptor token

Then provide the interceptor in app.module.ts or app.config.ts

providers: [
   {
     provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
   }
]


Then we call an http request,it will redirect to the intercept function in the interceptor.It consist of two parameters,first of type httprequest and other of type httphandler.Here we can check the token expiry also using jwt-decode

Eg: let token = localStorage.getItem(‘token’)
const decodedToken = jwtDecode(token)
const isExpired=(decodedToken & decodedToken.exp)?decodedToken.exp<Date.now():false;




Here also we can headers to the request like

request.clone({
setHeaders:{
Authorization: `Bearer ${token} `

3}
})

Then we call next.handle(request) to pass the request to the next request in the chain or the backend server

*How angular.json is configured ?


https://youtu.be/zGcHY6bO_IU?si=RB6vMp1RHUdWdlc-

The angular.json file is the central configuration file in an Angular workspace.It defines how an angular project is build,serve and tested

The angular.json file is a JSON object contains a list of properties and its values and firstly there are some top level properties
The first is schema and schema is nothing but the list of whatever angular cli commands are available.
Then there is version,that is the version of the application and default it is 1.
Then there is newProjectRoot and its default value is projects.

Then there is projects,it will have a separate set of configurations of each project.
For each project, it have the project name as key the options as values
The toplevel properties in the  values are

projectType-it refers the type of project whether it is application or library 

schematics-Then there is schematics for that,that is the schematics for that the application to follow. Putting “strict”:true makes strict type checking.

root-For application root is empty

sourceRoot- It is the source where we can find the project(src)

prefix-It have the prefix that came with the selectors of all created components,directives etc

architect-This is the main place where the project configuration are involved.

It have the properties build,serve,extract-i18n and test
and each have its own configuration 

When we run each command like ng build,ng serve etc that particular configuration will considered.

In case of property build in architect, it have the properties 
builder  have the configuration how to build.The entire configuration in its value @angular-devkit/build angular which was installed when installing angular. It will provide how to build.



After builder it have options 

outputPath:It have the path where to store the compiled files(dist/my-app)
Then there is index,main,polyfils,tsconfig,assets,styles,scripts.

After options the property configurations comes.

The configurations has a production build and development build and the default configuration is production.In development we no need to do any changes in configuration and in production there is a budget in which we can budget to the initial files like main.ts,styles etc using the properties maximumWarning and maximumError

After type:’initial’ there is anyComponentStyle where give budget to created component’s styles


After budget there is file replacement property
where we can replace files during production.
Here we replace the environment.ts file to environment.prod.ts

Then there is ‘outputHashing’ which is set as ‘all’

There after build there is serve,
Ng-serve is nothing but the live thing,it also have property production and development and default configuration is development.It do not have budget.we developers use ng serve to run the application in the local server.

After serve there is extract-i18n which is language things and language support.It will localize things

After ‘extract-i18n’ there is test, which is used for testing propose.
Normally as build, same things will be applied to here also and it have test related properties. 


Unit Testing 

https://youtu.be/emnwsVy8wRs?si=48fdsXmiUYdVuxYk

https://youtube.com/playlist?list=PLoC8Q0moRTSiTBAKWBGiJjFUMpiFdaGdF&si=S1YC6tgdCF4GyQD4

Unit Testing in Angular using jasmine framework.
Unit testing is a software development process in which the individual units or components of a software are tested.Unit testing ensures all codes meets quality standards before it is deployed.Unit testing saves time and money and help developers to write better code efficiently.
Unit testing is carried out during development of an application and usually developers are responsible for unit testing.Angular use jasmine framework for unit testing.Jasmine is attesting framework that supports behaviour driven development.Jasmine uses Karma to run tests.Karma is default test runner for application created using Angular CLI. 

In Jasmine our tests are known as specification or specs and they are grouped in TestBeds.

Karma runs in hard reload mode.That is it will reflect to changes 
by default.Sometimes it may not reflect.That times we need to stop and rerun

describe("Calcservice",()=>{
  it("should multiply two numbers",()=>{
    let shared = new SharedService
    let calc = new CalcService(shared);
    let result = calc.multiply(3,5);
    expect(result).toBe(15)
  })


  it("should have called myFunction",()=>{
    const shared = new SharedService;
    spyOn(shared,"mySharedFunction");
    let calc =new CalcService(shared);
    let result = calc.multiply(7,8)
    expect(shared.mySharedFunction).toHaveBeenCalled()
  })




})


Using spyOn, we can check whether a function is called without actually calling the function
Using callThrough() we can call the function in spyOn()

When we instantiate a service,its constructor also gets called.
To avoid this,we can create a mockService using createSpyObject

const shared = jasmine.createSpyObj(“SharedService”,[“MyFunction”])

TestBed utilities are  used to provide dependencies to our services using dependency injection instead of calling constructors explicitily

For avoid hard reload

ng test --no-watch


*****************************

Property '...' has no initializer and is not definitely assigned in the constructor

We can rectify this issue in different ways

1.in ts.config.json

make “strictPropertyInitialization”:false

2: makes:any[]=[]

3.makes:any[]

constructor(){
this.makes=[]
}

Spread Operator vs Rest Operator

Spread operator is used for destructuring an array

Rest operator is used collect the unused or remaining values in an array and put inside it in an array.

let [a,b,...c]=[1,2,3,4,5,6,7,8]

console.log(c)//3,4,5,6,7,8


Angular 17 vs other

Advantages
 
*Introduced Angular Signals
*Faster runtime compared to other version
*The change in syntax @for,@if,@switch simplifies conditional rendering and they aligns more closely to Javascript
*Faster build time with ‘esbuild’, a next generation bundler
*Standalone components
*deferred loading(@deffer)
*can create ssr projects or can add ssr to existing projects
ng new projectname --ssr
or ng add @angular/ssr


Disadvantages

*Dependency conflicts
*Even Angular 17 introduced optimizations,the large bundle size affects performance,especially in application that do not require full range of applications

How to migrate an angular application.

First save a backup of the project.
Then review the Angular Release Notes.
Ensure all the third party libraries are compatible the new version of Angular

Update angular CLI
Upgrade Angular dependencies
Update additional packages(eg:Angular material)
Address the breaking changes like changing syntax of for,if,switch etc.

Use esbuild for faster build time and update in angular.json
Then deploy the application

Also we can use ng lint for identifying and fix linting issues.

Route Guards


https://youtu.be/xeS6CLQ_R2k?si=DHij9hYjz3uC1Iau


JWT Authentication

https://youtu.be/uRVWNOxBOBI?si=hKFBMsykd58kMFv2

V8

https://youtu.be/xckH5s3UuX4?si=pj6O1ZbBAFyuX2Cc

complete angular-13 course

https://github.com/manojjha86/complete-angular-13-course/
