# ng-simple-carousel

A carousel component made with Angular 10. No other dependencies.
Focus on simple functionality, allowing easy-customize.
Responsive and mobile-frindly.

## Demo
You can check samples from [here](https://ng-simple-carousel.netlify.app/)  

## Install
```
npm i ng-simple-carousel
```

## APIs

### NgSimpleCarouselComponent
|  | Name       | Type |       |                  
|----|------------|----------------------|------------------------------------------------------|
| @Input | controller | CarouselController   | Class used to change component state programatically |
| @Input | images     | CarouselImage[]      | Information of images on the slides                  |
| @Input | objectFit  | "contain" \| "cover" | Set css object-fit property. Default is contain      |
| @Output | imgChange | EventEmitter<string> | Id of image emitted when active image is changed

### NgSimpleCarouselWithButtonComponent
|  | Name       | Type |       |                  
|----|------------|----------------------|------------------------------------------------------|
| @Input | controller | CarouselController   | Class used to change component state programatically |
| @Input | images     | CarouselImage[]      | Information of images on the slides                  |
| @Input | objectFit  | "contain" \| "cover" | Set css object-fit property. Default is contain      |
| @Output | imgChange | EventEmitter<string> | Id of image emitted when active image is changed

### NgSimpleCarouselComponentWithDots
|  | Name       | Type |       |                  
|----|------------|----------------------|------------------------------------------------------|
| @Input | controller | CarouselController   | Class used to change component state programatically |
| @Input | images     | CarouselImage[]      | Information of images on the slides                  |
| @Input | objectFit  | "contain" \| "cover" | Set css object-fit property. Default is contain      |
| @Output | imgChange | EventEmitter<string> | Id of image emitted when active image is changed

### CarouselController
| Name       | Arg |       |                  
|------------|----------------------|------------------------------------------------------|
| jumpTo() | id<string> | Jump to the image of specified id |
| prev()    | --- | Go to previous image |
| next() | --- | Go to next image |

### CarouselImage
| Name       | Type |       |  |                
|------------|------|----------------------|------------------------------------------------------|
| id | string | required | |
| src | string | required | |
| srcset | string |  | |
| sizes | string |  | |
| alt | string |  | |
| sources | CarouselImageSource [ ] |  | |

### CarouselImageSource
| Name       | Type |       |  |                
|------------|------|----------------------|------------------------------------------------------|
| srcset | string | required | |
| type | string |  | |
| sizes | string |  | |
