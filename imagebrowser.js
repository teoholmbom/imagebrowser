/* 
 * Directive for displaying images
 *
 */

/*jslint browser: true*/
/*global angular, app*/

app.directive('imageBrowser', function () {
    'use strict';

    var imageBrowser = {
        restrict: 'E',
        scope: {
            images: '=imageList',
            heading: '=heading',
            text: '=text'
        },
        templateUrl: 'imagebrowser.html',
        controller: function ($scope) {
            var imagesLength = $scope.images.length,
                currentIndex = 0;

            // set active image url to the first image in array
            $scope.activeImgUrl = $scope.images[0];

            /**
             * Function for handling when user selects an image
             * @param {int} index
             */
            $scope.imgSelect = function (index) {
                // update currentIndex
                currentIndex = index;

                // change image
                $scope.activeImgUrl = $scope.images[currentIndex];

            };

            /**
             * Function for showing next image in list
             */
            $scope.showNext = function () {
                // if current index is the last one in the array set index to 0
                // else increase by 1
                if (currentIndex === imagesLength - 1) {
                    currentIndex = 0;
                } else {
                    currentIndex = currentIndex + 1;
                }
                // set new active image url
                $scope.activeImgUrl = $scope.images[currentIndex];

            };
        }
    };

    return imageBrowser;

});