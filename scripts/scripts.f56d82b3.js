"use strict";angular.module("angularAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).otherwise({redirectTo:"/"})}]),angular.module("angularAppApp").controller("MainCtrl",["$scope","current",function(a,b){a.recipes=b.query()}]),angular.module("angularAppApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularAppApp").factory("current",["$resource",function(a){return a("https://api.edamam.com/search?q=:search&from=:from&to=:to&app_id=7a4648b9&app_key=fc9cc19841af01b1f07091603f0e4b87&callback=JSON_CALLBACK",{},{query:{method:"JSONP",params:{search:"cookies",from:0,to:10},isArray:!1}})}]),angular.module("angularAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view. This is the second page of the site.</p>"),a.put("views/contact.html",'<div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/main.html",'<div> <p>Search Term: {{ recipes.q }}</p> <p>Results from {{ recipes.from }} to {{ recipes.to}}</p> <ul> <li ng-repeat="hit in recipes.hits"> <a href="{{hit.recipe.url}}">{{hit.recipe.label}}</a> </li> </ul> <button class="btn btn-primary" ng-click="nextPage ()">Next</button> </div>')}]);