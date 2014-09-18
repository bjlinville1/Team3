angular.module("team3-ng-features")

    .controller('homeCtrl', function($scope, $log, homeSvc, redditSvc) {
        $scope.works = "This is just the beginning";
        $log.info("home controller is go");

        $scope.subRedditName = "itookapicture";

        redditSvc.getReddit($scope.subRedditName).then(function(posts) {
            $log.info(posts.data.data.children);
            $scope.posts = posts.data.data.children;

        });

        $scope.getTheReddit = function (x) {
            redditSvc.getReddit(x).then(function(posts) {
                $log.info(posts.data.data.children);
                $scope.posts = posts.data.data.children;

            });
        };

        $scope.subRedditContentName = "news";
        redditSvc.getRedditContent($scope.subRedditContentName).then(function(posts) {
            $log.info(posts.data.data.children);
            $scope.contentPosts = posts.data.data.children;

        });

        $scope.getTheRedditContent = function (y) {
            redditSvc.getRedditContent(y).then(function (posts) {
                $log.info(posts.data.data.children);
                $scope.contentPosts = posts.data.data.children;

            });
        };

    });

console.log("ctrl features");